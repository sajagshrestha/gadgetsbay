<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
{!! Form::open(['action'=> 'ProductsController@store','method'=>'POST', 'enctype'=>'multipart/form-data']) !!}
<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('title', 'Title', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{Form::text('title','', ['class'=>'form-control'])}}
    </div>
</div>
<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('description', 'Description', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{Form::textarea('description','', ['class'=>'form-control'])}}
    </div>
</div>
<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('expiresIn', 'Expires In', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{Form::select('expiresIn', ['14' => '2 Weeks', '30' => '1 Month', '60' => '2 Months',
        '90' => '3 Months', '120' => '4 Months'])}}
    </div>
</div>
<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('price', 'Price', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{Form::text('price','', ['class'=>'form-control'])}}
    </div>
</div>

<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('negotiable', 'Negotiable', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{--            {{Form::text('negotiable','', ['class'=>'form-control'])}}--}}
        <input type="radio" name="negotiable" value="1">Yes
        <input type="radio" name="negotiable" value="2">Fixed Price
    </div>
</div>
<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('condition', 'Condition', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{--            {{Form::text('price','', ['class'=>'form-control'])}}--}}
        <input type="radio" name="condition" value="1">Brand New(not used)
        <input type="radio" name="condition" value="2">Like New(used few times)
        <input type="radio" name="condition" value="3">Excellent
        <input type="radio" name="condition" value="4">Good/Fair
        <input type="radio" name="condition" value="5">Not Working
    </div>
</div>
<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('usedFor', 'Used For(in months', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{Form::text('usedFor',null, ['class'=>'form-control'])}}
    </div>
</div>

<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('frontCamera', 'Front Camera', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{--            {{Form::text('price','', ['class'=>'form-control'])}}--}}
        <select name="frontCamera" id="">
            <option value="1">None</option>
            <option value="2">1MP</option>
            <option value="3">2MP</option>
            <option value="4">3MP</option>
            <option value="5">5MP</option>
            <option value="6">10MP</option>
            <option value="7">20MP</option>
            <option value="8">More than 20MP</option>
        </select>
    </div>
</div>

<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('backCamera', 'Back Camera', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{--            {{Form::text('price','', ['class'=>'form-control'])}}--}}
        <label for=""></label><select name="backCamera" id="">
            <option value="1">None</option>
            <option value="2">1MP</option>
            <option value="3">2MP</option>
            <option value="4">3MP</option>
            <option value="5">5MP</option>
            <option value="6">10MP</option>
            <option value="7">20MP</option>
            <option value="8">More than 20MP</option>
        </select>
    </div>
</div>

<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('RAM', 'RAM', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{--            {{Form::text('price','', ['class'=>'form-control'])}}--}}
        <select name="RAM" id="">
            <option value="1">512MB or less</option>
            <option value="2">1GB</option>
            <option value="3">2GB</option>
            <option value="4">3GB</option>
            <option value="5">4GB</option>
            <option value="6">6GB</option>
            <option value="7">8GB</option>
            <option value="8">More than 8BG</option>
        </select>
    </div>
</div>

<div class="row d-flex py-2">
    <div class="col-2 align-self-center">
        {{Form::label('internalStorage', 'Internal Storage', ['class'=>'m-0'])}}
    </div>
    <div class="col-6">
        {{--            {{Form::text('price','', ['class'=>'form-control'])}}--}}
        <select name="internalStorage" id="">
            <option value="1">512MB or less</option>
            <option value="2">1GB</option>
            <option value="3">4GB</option>
            <option value="4">8GB</option>
            <option value="5">16GB</option>
            <option value="6">32GB</option>
            <option value="7">128GB</option>
            <option value="8">More than 128BG</option>
        </select>
    </div>
</div>

<div class="row d-flex py-2">

    <div class="col-6">
        {{Form::file('imageName', ['class'=>'form-control'])}}
    </div>
</div>
<input type="checkbox" name="vehicle[]" value="Bike">
<input type="checkbox" name="vehicle[]" value="Car">
<input type="checkbox" name="vehicle[]" value="Boat" >
<input type="checkbox" name="vehicle[]" value="Bodogat" >
{!! Form::submit('Submit',['class'=> 'btn btn-success']) !!}

{!! Form::close() !!}

</body>

