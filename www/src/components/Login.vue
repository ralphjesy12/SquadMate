<template>
    <section id="login" class="hero is-fullheight is-dark is-primary">
        <div class="hero-body">
            <div class="container has-text-centered">
                <img src="/img/squadmate.png" />
                <hr />
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
                        <a class="button is-fullwidth is-info is-rounded" href="#">
                            Login
                        </a>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <a class="button is-fullwidth is-info is-inverted is-outlined is-rounded" href="#">
                            Sign Up
                        </a>
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
