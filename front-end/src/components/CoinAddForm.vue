<template>
  <div>
    <a-button type='primary' @click="showModal">添加</a-button>
    <coin-create-form
      ref="collectionForm"
      :visible="visible"
      @cancel="handleCancel"
      @create="handleCreate"
    />
  </div>
</template>

<script>
import  CoinCategorySelect from './CoinCategorySelect';

const CoinCreateForm = {
  props: ['visible'],
	components: { CoinCategorySelect },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  template: `
    <a-modal
      :visible="visible"
      title='添加币种'
      okText='Create'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
        <a-form-item label='币种'>
          <coin-category-select v-decorator=['coin_name']> </coin-category-select>
        </a-form-item>
        <a-form-item label='建仓价格'>
          <a-input placeholder="average price" v-decorator=['average_price'] />
        </a-form-item>
      </a-form>
    </a-modal>
  `,
}

export default {
  name: 'CoinAddForm',
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleCancel  () {
      this.visible = false
    },
    handleCreate  () {
      const form = this.$refs.collectionForm.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
				debugger
				this.$store.dispatch('addCoinIndexData', values)
        form.resetFields()
        this.visible = false
      })
    },
  },
  components: { 
		CoinCreateForm
},
}
</script>