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
        Schema::create('transaction_items', function (Blueprint $table) {
            $table->id();

            $table->foreignId('transaction_id');
            $table->foreignId('parent_id');


            $table->integer('price');
            $table->integer('quantity')->default(1);
            $table->integer('total');

            $table->longText('note');

            // FK
            $table->foreign('transaction_id')->references('id')->on('transactions');
            $table->foreign('parent_id')->references('id')->on('items');

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
        Schema::dropIfExists('transaction_items');
    }
};
