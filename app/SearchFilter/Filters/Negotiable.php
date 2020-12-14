<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;


class Negotiable implements Filter
{
    public static function apply($builder, $value)
    {
        if(!($value=="any"|| $value== ""))
        {
            return $builder->where('negotiable', '=' ,"$value" );
        }

        return $builder->where('negotiable', 'like' ,"%" );

    }

}
