<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;


class Condition implements Filter
{
    public static function apply($builder, $value)
    {
        if($value == 'Any')
        {
            return $builder->where('condition', 'like' ,'%' );
        }
        else
        {
            return $builder->where('condition', '=' ,$value );

        }

    }

}
