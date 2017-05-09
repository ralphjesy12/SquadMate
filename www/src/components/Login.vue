<template>
    <section id="login" class="hero is-fullheight is-dark is-primary">
        <div class="hero-body">
            <div class="container">
                <h3 class="title is-2">
                    Login Now
                </h3>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email Address">
                        <span class="icon is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <!-- <span class="icon is-small is-right">
                            <i class="fa fa-check"></i>
                        </span> -->
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password">
                        <span class="icon is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button" type="submit">
                            Login
                        </button>
                        <button class="button is-dark" type="reset">
                            Reset
                        </button>
                    </p>
                </div>
            </div>
        </div>

        <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li><a>All Rights Reserved. &copy; Copyright 2017</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
