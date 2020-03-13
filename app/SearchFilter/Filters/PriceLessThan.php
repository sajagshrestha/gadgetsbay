<?php


namespace App\SearchFilter\Filters;
use Illuminate\Database\Eloquent\Builder;

class PriceLessThan  implements Filter
{
    public static function apply($builder, $value)
    {
        if($value != "")
        {
            return $builder->where('price', '<' , $value);
        }
    }

}
