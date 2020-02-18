<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;

class Title  implements Filter
{
    public static function apply($builder, $value)
    {
        return $builder->where(function ($query) use($value) {
            $query->where('title','LIKE', "%$value%")
                ->orWhere('description','LIKE', "%$value%");
        });
    }
}
