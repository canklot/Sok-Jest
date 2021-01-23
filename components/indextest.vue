<template>
  <div class="MainContainer">
    <p>{{ $route.params.id}}</p>
    <p>HELLLLOOOO</p>
    <h1>{{title}}</h1>
    <p>{{ $route.params.id}}</p>
    <img  class="UrunResim" src="@/images/kampanya1.jpg" + {{thumbnail}} alt="resim" />
  </div>
</template>

<script>
export default {
    props:['thumbnail','title', 'previewtext']
}
</script>