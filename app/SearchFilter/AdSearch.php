<?php


namespace App\SearchFilter;

use App\Ad;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Carbon\Carbon;


class AdSearch
{
    public static function apply(Request $filters)
    {
        $query = (new Ad)->newQuery();
        $today = Carbon::now();
        $query = static::applyFiltersToQuery($filters, $query);

        return $query->where('expires_on','>=',$today->toDateString())->where('status',1)->paginate(20);
    }

    private static function applyFiltersToQuery(
        Request $filters, Builder $query) {
        foreach ($filters->all() as $filterName => $value) {

           if($value!=null)
           {
             $decorator =
                __NAMESPACE__ . '\\Filters\\' .
                str_replace(' ', '', ucwords(
                    str_replace('_', ' ', $filterName)));

            if (class_exists($decorator)) {
                $query = $decorator::apply($query, $value);
            }
           }

        }

        return $query;
    }
}
