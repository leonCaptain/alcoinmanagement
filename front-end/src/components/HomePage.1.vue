<template>
  <div>
		<coin-add-form style="display:inline;"></coin-add-form>
		<setting-price style="display:inline;"></setting-price>
    <a-table bordered :dataSource="dataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name')"/>
      </template>
      <template slot="operation" slot-scope="text, record">
				<a href="javascript:;" @click="onClick(record.key)">detail</a>
				<a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
import EditableCell from './EditableCell';
import CoinAddForm from './CoinAddForm';
import alCoinAPI from '../api';
import SettingPrice from './SettingPrice';
/*
* EditableCell Code https://github.com/vueComponent/ant-design-vue/blob/master/components/table/demo/EditableCell.vue
*/
export default {
  name: 'HomePage',
  components: {
    EditableCell,
		CoinAddForm,
		SettingPrice
  },
  data () {
    return {
      count: this.$store.state.coinIndexData || 1,
      columns: [{
        title: '币种',
        dataIndex: 'coin_name',
        width: '30%',
        scopedSlots: { customRender: 'coin_name' },
      }, {
        title: '建仓平均价格',
        dataIndex: 'average_price',
      }, {
        title: '实时价格(币安)',
        dataIndex: 'current_price',
      },{
			  title: '持仓数量',
			  dataIndex: 'count',
			},{
        title: '总额',
        dataIndex: 'total',
        scopedSlots: { customRender: 'total' },
      },{
        title: '收益率(%)',
        dataIndex: 'yield',
        scopedSlots: { customRender: 'yield' },
      },{
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      }],
    }
  },
	computed: {
		dataSource : function () {
			let dataSources = this.$store.state.coinIndexData || [];
			dataSources.forEach((v) =>{
				v.total = v.count * v.current_price;
			});
			return dataSources;
		}
	},
  methods: {
    onCellChange (key, dataIndex) {
      return (value) => {
        const dataSource = [...this.dataSource]
        const target = dataSource.find(item => item.key === key)
        if (target) {
          target[dataIndex] = value
          this.dataSource = dataSource
        }
      } 
    },
		onClick (key) {
			 this.$router.push({
				path: '/coin/detail',
				query: {
					key: key
				}
			})
		},
    onDelete (key) {
      const dataSource = [...this.dataSource]
      this.dataSource = dataSource.filter(item => item.key !== key)
    }
  },
}
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
