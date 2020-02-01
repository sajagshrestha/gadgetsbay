{{--@extends('layouts.app')--}}

@section('content')
    @if(count($products)>0)
    <table class="table">
        <thead>
        <tr>
            <th scope="col">S.N.</th>
{{--            <th scope="col">Posted By</th>--}}
            <th scope="col">Title</th>
{{--            <th scope="col">Model</th>--}}
            <th scope="col">Price</th>

        </tr>
        </thead>
        <tbody>

        @foreach($products as $product)
            <tr>

                    <th scope="row">{{$product->id}}
                    </th>
{{--                    <td>--}}
{{--                        {{$product->user->name}}--}}
{{--                    </td>--}}
                    <td>
                        {{$product->title}}
                    </td>
{{--                    <td>--}}
{{--                        {{$product->d}}--}}
{{--                    </td>--}}
                    <td>
                        {{$product->price}}
                    </td>
                <td>
                    <a href="{{route('product.show',[$product->id])}}" class="btn btn-primary">View</a>
                </td>


            </tr>

        @endforeach
        </tbody>
    </table>
    @endif
@endsection
