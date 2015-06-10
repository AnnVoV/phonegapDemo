module.exports = {
  'public': './',
  port: '80',
  ftl: {
    base: './ftl',
    global: {
 
    },
    'productDetail_000008_new.ftl': function(req, res) {
      return {
        saleActivityMap: {
          "000008": {
            activityStatus: 'actived'
          }
        }
      }
    }
 
  },
  mock: [{
    url: '/normandy/limit/apply/expectedApply',
    method: 'post',
    status: '200',
    header: {
      
    },
    response: function(req, res) {
      return {
        "code":0,
        "msg":'请求成功',
        "loanApplyId":12
      }
    }
  },
  {
    url:'normandy/auth/login',
    method:'post',
    status:'200',
    header:{

    },
    response:function(req, res){
      return {
        "code":0,
        "msg":'请求成功',
        "loanApplyId":12
      }
    }
  },
  {
    url:'/auth/register',
    method:'post',
    status:'200',
    header:{

    },
    response:function(req,res){
      return {
        "code":0,
        "msg":'请求成功'
      }
    }
  },
  {
    url:'/normandy/limit/apply/calculateFee',
    method:'post',
    status: '200',
    header: {
      
    },
    response:function(req,res){
      return {
          "loanRepaymentModeList":[
           {"loanProductRepaymentCode":"PM1","monthPayBack":12,"monthFee":0.16,"monthRateStr":"1.29%","loanProductCode":"P1","id":1,"name":"1个月","code":"M1","periods":1,"status":1,"rate":0.01},
           {"loanProductRepaymentCode":"PM2","monthPayBack":4000.07,"monthFee":0.11,"monthRateStr":"0.89%","loanProductCode":"P1","id":2,"name":"3个月","code":"M2","periods":3,"status":1,"rate":0.01890000},
           {"loanProductRepaymentCode":"PM3","monthPayBack":2.035,"monthFee":0.09,"monthRateStr":"0.75%","loanProductCode":"P1","id":3,"name":"6个月","code":"M3","periods":6,"status":1,"rate":0.01750000},
           {"loanProductRepaymentCode":"PM4","monthPayBack":10.35,"monthFee":0.08,"monthRateStr":"0.69%","loanProductCode":"P1","id":4,"name":"9个月","code":"M4","periods":9,"status":1,"rate":0.01690000}
           ],
         "code":0,
         "msg":"请求成功",
         "loanApplyId":1
       }
    }
  },
  {
    url: '/normandy/limit/apply/applyFund/getApplyFundTypeList',
    method: 'post',
    status: '200',
    header: {
      
    },
    response: function(req, res) {
      return {
        "gongjijinTypeList":[
          {
            "code":"ZJ_HZ_001",
            "name":"浙江省公积金"
          }
        ],
        "code":0,
        "msg":"请求成功"}
    }
  },
  {
    url: '/limit/apply/applyFund',
    method: 'post',
    status: '200',
    header: {
      
    },
    response: function(req, res) {
      return {
        "code":0,
        "msg":"请求成功"}
    }
  },
  {
    url: '/limit/apply/personal',
    method: 'post',
    status: '200',
    header: {
      
    },
    response: function(req, res) {
      return {
        "code":0,
        "msg":"请求成功"
      }
    }
  }],
  proxy: [{
      path: '/test',
      target: 'http://www.baidu.com'
    } 
  ]
}