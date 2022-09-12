<?php

namespace App\Http\Controllers;

use App\Models\ProductComposition;
use App\Http\Requests\StoreProductCompositionRequest;
use App\Http\Requests\UpdateProductCompositionRequest;

class ProductCompositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductCompositionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductCompositionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductComposition  $productComposition
     * @return \Illuminate\Http\Response
     */
    public function show(ProductComposition $productComposition)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductComposition  $productComposition
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductComposition $productComposition)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductCompositionRequest  $request
     * @param  \App\Models\ProductComposition  $productComposition
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductCompositionRequest $request, ProductComposition $productComposition)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductComposition  $productComposition
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductComposition $productComposition)
    {
        //
    }
}
