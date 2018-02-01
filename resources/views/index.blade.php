@extends('layouts.master')

@section('content')
	
	<div id="app"></div>
	
@stop


@section('scripts')
	@parent
	<script type="text/javascript" src="{{asset('dist/js/app.bundle.js')}}"></script>
@stop