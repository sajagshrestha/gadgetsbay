<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;


class Condition implements Filter
{
    public static function apply($builder, $value)
    {
        if($value == 'Brand New')
        {
            return $builder->where('condition', '=' ,"Brand New" );
        }
        else
        {
            return $builder->where('condition', '<>' ,"Brand New" );
        }

    }

}
