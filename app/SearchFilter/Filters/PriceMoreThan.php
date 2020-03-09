<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;

class PriceMoreThan  implements Filter
{
    public static function apply($builder, $value)
    {
        return $builder->where('price', '>' , $value);
    }

}
