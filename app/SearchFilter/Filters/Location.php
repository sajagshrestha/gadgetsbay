<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;


class Location implements Filter
{
    public static function apply($builder, $value)
    {
        return $builder->where('location', 'LIKE' ,"%$value%" );
    }

}
