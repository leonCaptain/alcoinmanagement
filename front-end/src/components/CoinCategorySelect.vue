<template>
  <a-select
    showSearch
    :value="value"
    placeholder="input search text"
    style="width: 200px"
    :defaultActiveFirstOption="false"
    :showArrow="false"
    :filterOption="false"
    @search="handleSearch"
    @change="handleChange"
    :notFoundContent="null"
  >
    <a-select-option v-for="d in data" :key="d.value">{{d.text}}</a-select-option>
  </a-select>
</template>
<script>
import querystring from 'querystring';

let timeout;
let currentValue;

function fetch(value, callback) {
	var that = this;
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
		that.axios.get('api/coin/list')
		.then(response => response.data)
		.then((d) => {
			if (currentValue === value) {
          const result = d.coins;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r.name,
              text: r.name
            });
          });
          callback(data);
			}
		})
		.catch(function(error){
			console.log(error)
		})
  }

  timeout = setTimeout(fake, 300);
}
export default {
  name: 'CoinCategorySelect',
  data() {
    return {
      data: [],
      value: undefined,
    }
  },
  methods: {
    handleSearch (value) {
			fetch.call(this, value, data => this.data = data)
    },
    handleChange (value) {
      console.log(value)
      this.value = value
      fetch(value, data => this.data = data);
    },
  }
}
</script>
