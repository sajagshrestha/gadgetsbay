<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditAdMobile extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return tue;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'negotiable' => 'required',
            'condition' => 'required',
            'usedFor' => 'required',
            'frontCamera' =>'required',
            'backCamera' =>'required',
            'RAM' =>'required',
            'internalStorage' =>'required',

        ];
    }
}
