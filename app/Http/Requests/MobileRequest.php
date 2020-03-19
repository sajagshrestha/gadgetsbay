<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MobileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
       return [
            'title' => 'required|max:255',
            'description' => 'required',
            'expiresIn' => 'required|integer',
            'price' => 'required|integer',
            'negotiable' => 'required',
            'condition' => 'required',
            'frontCamera' =>'required',
            'backCamera' =>'required',
            'RAM' =>'required',
            'internalStorage' =>'required',

        ];
    }
}
