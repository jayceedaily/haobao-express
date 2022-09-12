<?php

namespace App\Http\Controllers;

use App\Models\InventoryTransaction;
use App\Http\Requests\StoreInventoryTransactionRequest;
use App\Http\Requests\UpdateInventoryTransactionRequest;

class InventoryTransactionController extends Controller
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
     * @param  \App\Http\Requests\StoreInventoryTransactionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInventoryTransactionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InventoryTransaction  $inventoryTransaction
     * @return \Illuminate\Http\Response
     */
    public function show(InventoryTransaction $inventoryTransaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InventoryTransaction  $inventoryTransaction
     * @return \Illuminate\Http\Response
     */
    public function edit(InventoryTransaction $inventoryTransaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInventoryTransactionRequest  $request
     * @param  \App\Models\InventoryTransaction  $inventoryTransaction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInventoryTransactionRequest $request, InventoryTransaction $inventoryTransaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InventoryTransaction  $inventoryTransaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(InventoryTransaction $inventoryTransaction)
    {
        //
    }
}
