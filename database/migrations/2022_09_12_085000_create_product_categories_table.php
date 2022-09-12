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
        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->longText('description')->nullable();
            $table->foreignId('parent_id')->nullable();

            // FK
            $table->foreign('parent_id')->references('id')->on('product_categories');

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
        Schema::dropIfExists('product_categories');
    }
};