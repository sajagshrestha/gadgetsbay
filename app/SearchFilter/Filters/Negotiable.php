<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;


class Negotiable implements Filter
{
    public static function apply($builder, $value)
    {
        if($value!="any")
        {
            return $builder->where('negotiable', '=' ,"$value" );
        }
    }

}
