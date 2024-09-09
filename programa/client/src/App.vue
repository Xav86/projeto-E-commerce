<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .space-between {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
