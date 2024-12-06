<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_modifiers', function (Blueprint $table) {
            $table->id();


            $table->foreignId('modifier_id');
            $table->foreignId('item_id');

            // FK
            $table->foreign('modifier_id')->references('id')->on('modifiers');
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
        Schema::dropIfExists('item_modifiers');
    }
};
