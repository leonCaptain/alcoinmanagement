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
          <coin-category-select> </coin-category-select>
        </a-form-item>
        <a-form-item label='Description'>
          <a-input
            type='textarea'
            v-decorator="['description']"
          />
        </a-form-item>
        <a-form-item class='collection-create-form_last-form-item'>
          <a-radio-group
            v-decorator="[
              'modifier',
              {
                initialValue: 'private',
              }
            ]"
          >
              <a-radio value='public'>Public</a-radio>
              <a-radio value='private'>Private</a-radio>
            </a-radio-group>
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
        console.log('Received values of form: ', values)
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