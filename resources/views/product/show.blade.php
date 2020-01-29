@extends('layouts.app')

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-9">
            <div class="card">
                <div class="card-header">
                    <div class="title-wrap">
                        {{$product->title}}
                    </div>
                    <div class="text-wrap">
                        <small class="">Posted on {{$product->created_at.' expires in '.$product->expiresIn.' days'}} </small>

                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-2">
                            Description:
                        </div>
                        <div class="col-6">
                            {{$product->description}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            Price:
                        </div>
                        <div class="col-6">
                            {{$product->price}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            Negotiable:
                        </div>
                        <div class="col-6">
                            @if($product->negotiable==1)
                                Yes
                            @else
                                No
                            @endif
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            Condition:
                        </div>
                        <div class="col-6">
                            @switch($product->condition)
                                @case(1)
                                Brand New(not used)
                                @break

                                @case(2)
                                Like New(used few times)
                                @break

                                @case(3)
                                Excellent
                                @break

                                @case(4)
                                Good/Fair
                                @break

                                @case(5)
                                Not working
                                @break

                                @default
                                Information not available
                            @endswitch
                        </div>
                    </div>

                    @if($product->usedFor)
                        <div class="row">
                            <div class="col-2">
                                Used for:
                            </div>
                            <div class="col-6">
                                {{$product->negotiable}}
                            </div>
                        </div>
                    @endif

                    <div class="row">
                        <div class="col-2">
                            Front Camera:
                        </div>
                        <div class="col-6">
                            @switch($mobile->frontCamera)
                                @case(1)
                                none
                                @break

                                @case(2)
                                1MP
                                @break

                                @case(3)
                                2MP
                                @break

                                @case(4)
                                3MP
                                @break

                                @case(5)
                                5MP
                                @break

                                @case(6)
                                10MP
                                @break

                                @case(7)
                                20MP
                                @break

                                @case(8)
                                More than 20MP
                                @break

                                @default
                                Information not available
                            @endswitch
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            Back Camera:
                        </div>
                        <div class="col-6">
                            @switch($mobile->backCamera)
                                @case(1)
                                none
                                @break

                                @case(2)
                                1MP
                                @break

                                @case(3)
                                2MP
                                @break

                                @case(4)
                                3MP
                                @break

                                @case(5)
                                5MP
                                @break

                                @case(6)
                                10MP
                                @break

                                @case(7)
                                20MP
                                @break

                                @case(8)
                                More than 20MP
                                @break

                                @default
                                Information not available
                            @endswitch
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            RAM:
                        </div>
                        <div class="col-6">
                            @switch($mobile->RAM)
                                @case(1)
                                512MB or less
                                @break

                                @case(2)
                                1GB
                                @break

                                @case(3)
                                2GB
                                @break

                                @case(4)
                                3GB
                                @break

                                @case(5)
                                4GB
                                @break

                                @case(6)
                                6GB
                                @break

                                @case(7)
                                8GB
                                @break

                                @case(8)
                                More than 8GB
                                @break

                                @default
                                Information not available
                            @endswitch
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            Internal Storage:
                        </div>
                        <div class="col-6">
                            @switch($mobile->internalStorage)
                                @case(1)
                                512MB or less
                                @break

                                @case(2)
                                1GB
                                @break

                                @case(3)
                                4GB
                                @break

                                @case(4)
                                8GB
                                @break

                                @case(5)
                                16GB
                                @break

                                @case(6)
                                32GB
                                @break

                                @case(7)
                                128GB
                                @break

                                @case(8)
                                More than 128GB
                                @break

                                @default
                                Information not available
                            @endswitch
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


@endsection
