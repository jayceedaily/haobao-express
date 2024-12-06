<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_store_prices', function (Blueprint $table) {
            $table->id();

            $table->foreignId('store_id');
            $table->foreignId('item_id');
            $table->integer('price')->nullable();

            // FK
            $table->foreign('store_id')->references('id')->on('stores');
            $table->foreign('item_id')->references('id')->on('items');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('item_store_prices', function (Blueprint $table) {
            //
        });
    }
};
