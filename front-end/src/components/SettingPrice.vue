<template>
  <div>
    <a-button type="primary" @click="showModal">设置价格单位</a-button>
    <a-modal
      title="设置价格单位"
      v-model="visible"
      @ok="handleOk"
    >
	<div :style="{ marginTop: '16px' }">
      <a-radio-group defaultValue="current" size="small" options= "available_user_pairs">
		  
      </a-radio-group>
    </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
	  current: '',
	  available_user_pairs: [{label:"cny",value:"cny",disable:false }],
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e);
      this.visible = false
    },
  }
}
</script>
