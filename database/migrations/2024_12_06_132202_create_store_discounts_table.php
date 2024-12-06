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
        Schema::create('store_discounts', function (Blueprint $table) {
            $table->id();

            $table->foreignId('store_id');
            $table->foreignId('discount_id');

            // FK
            $table->foreign('store_id')->references('id')->on('stores');
            $table->foreign('discount_id')->references('id')->on('discounts');

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
        Schema::dropIfExists('store_discounts');
    }
};
