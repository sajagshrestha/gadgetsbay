<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAd extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
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
            'negotiable' => 'required|between:1,2',
            'condition' => 'required|between:1,5',
            'usedFor' => 'required|integer'
        ];
    }
}
