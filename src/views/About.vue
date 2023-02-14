<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary">
      Primary
    </a-button>
    <a-icon type="stock" />
    <a-space>
      {{$t("close")}}
    <a-button type="primary">Button</a-button>
    <a-upload>
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <a-button>Confirm</a-button>
    </a-popconfirm>
  </a-space>
  </div>
</template>
