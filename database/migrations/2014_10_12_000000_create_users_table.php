<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('role')->default('user');
            $table->string('email')->unique();
            $table->bigInteger('phone')->unique();
            $table->string('password');
<<<<<<< HEAD
=======
           
<<<<<<< HEAD
>>>>>>> 53e555d... register page redesign completed
=======
>>>>>>> 21a401223d1c15667b17e81546a71a43409d3373
>>>>>>> 7d6c830ee756d9a3789368e47283e8e23ae5bc4d
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
