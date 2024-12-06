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
        Schema::create('items', function (Blueprint $table) {
            $table->id();

            $table->string('name', 255);
            $table->longText('description')->nullable();
            $table->longText('image_url')->nullable();
            $table->integer('cost')->default(0);     
            $table->foreignId('category_id')->nullable();
            $table->boolean('for_sale')->default(1);
            $table->boolean('track_stocks')->default(0);
            $table->integer('min_transaction_quantity')->nullable();     
            $table->integer('max_transaction_quantity')->nullable();     

            $table->foreignId('parent_id')->nullable();
            $table->foreignId('modifier_id')->nullable();

            // FK
            $table->foreign('parent_id')->references('id')->on('items');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('modifier_id')->references('id')->on('modifiers');

            // Default Columns
            $table->foreignId('created_by');
            $table->foreign('created_by')->references('id')->on('users');

            $table->foreignId('updated_by');
            $table->foreign('updated_by')->references('id')->on('users');

            $table->foreignId('deleted_by');
            $table->foreign('deleted_by')->references('id')->on('users');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
