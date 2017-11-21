import React, {PureComponent} from 'react';
import { Cascader } from 'antd';

const subjects = [{
  "children": [
    {"label": "1001 库存现金", "value": "1001"},
    {"label": "1002 银行存款", "value": "1002"},
    {"label": "1012 其他货币资金", "value": "1012"},
    {"label": "1101 短期投资", "value": "1101"},
    {"label": "1101001 短期投资-股票", "value": "1101001"},
    {"label": "1101002 短期投资-债券", "value": "1101002"},
    {"label": "1101003 短期投资-基金", "value": "1101003"},
    {"label": "1121 应收票据", "value": "1121"},
    {"label": "1122 应收账款", "value": "1122"},
    {"label": "1123 预付账款", "value": "1123"}, {"label": "1131 应收股利", "value": "1131"}, {"label": "1132 应收利息", "value": "1132"}, {
    "label": "1221 其他应收款",
    "value": "1221"
  }, {"label": "1401 材料采购", "value": "1401"}, {"label": "1402 在途物资", "value": "1402"}, {
    "label": "1403 原材料",
    "value": "1403"
  }, {"label": "1404 材料成本差异", "value": "1404"}, {"label": "1405 库存商品", "value": "1405"}, {
    "label": "1407 商品进销差价",
    "value": "1407"
  }, {"label": "1408 委托加工物资", "value": "1408"}, {"label": "1411 周转材料", "value": "1411"}, {
    "label": "1421 消耗性生物资产",
    "value": "1421"
  }, {"label": "1501 长期债券投资", "value": "1501"}, {"label": "1511 长期股权投资", "value": "1511"}, {
    "label": "1601 固定资产",
    "value": "1601"
  }, {"label": "1602 累计折旧", "value": "1602"}, {"label": "1604 在建工程", "value": "1604"}, {
    "label": "1605 工程物资",
    "value": "1605"
  }, {"label": "1606 固定资产清理", "value": "1606"}, {"label": "1621 生产性生物资产", "value": "1621"}, {
    "label": "1622 生产性生物资产累计折旧",
    "value": "1622"
  }, {"label": "1701 无形资产", "value": "1701"}, {"label": "1702 累计摊销", "value": "1702"}, {
    "label": "1801 长期待摊费用",
    "value": "1801"
  }, {"label": "1901 待处理财产损溢", "value": "1901"}], "label": "资产", "value": "1"
}, {
  "children": [
    {"label": "2001 短期借款", "value": "2001"}, {
    "label": "2201 应付票据",
    "value": "2201"
  }, {"label": "2202 应付账款", "value": "2202"}, {"label": "2203 预收账款", "value": "2203"}, {
    "label": "2211 应付职工薪酬",
    "value": "2211"
  }, {"label": "2221 应交税费", "value": "2221"}, {
    "label": "2221001 应交税费-应交增值税",
    "value": "2221001"
  }, {"label": "222100101 应交税费-应交增值税-进项税额", "value": "222100101"}, {
    "label": "222100102 应交税费-应交增值税-已交税金",
    "value": "222100102"
  }, {"label": "222100103 应交税费-应交增值税-转出未交增值税", "value": "222100103"}, {
    "label": "222100104 应交税费-应交增值税-减免税款",
    "value": "222100104"
  }, {"label": "222100105 应交税费-应交增值税-销项税额", "value": "222100105"}, {
    "label": "222100106 应交税费-应交增值税-出口退税",
    "value": "222100106"
  }, {"label": "222100107 应交税费-应交增值税-进项税额转出", "value": "222100107"}, {
    "label": "222100108 应交税费-应交增值税-出口抵减内销产品应纳税额",
    "value": "222100108"
  }, {"label": "222100109 应交税费-应交增值税-转出多交增值税", "value": "222100109"}, {
    "label": "222100110 应交税费-应交增值税-销项税额抵减",
    "value": "222100110"
  }, {"label": "2221002 应交税费-未交增值税", "value": "2221002"}, {
    "label": "2221003 应交税费-应交消费税",
    "value": "2221003"
  }, {"label": "2221004 应交税费-应交营业税", "value": "2221004"}, {
    "label": "2221005 应交税费-应交资源税",
    "value": "2221005"
  }, {"label": "2221006 应交税费-应交所得税", "value": "2221006"}, {
    "label": "2221007 应交税费-应交土地增值税",
    "value": "2221007"
  }, {"label": "2221008 应交税费-应交城市维护建设税", "value": "2221008"}, {
    "label": "2221009 应交税费-应交房产税",
    "value": "2221009"
  }, {"label": "2221010 应交税费-应交城镇土地使用税", "value": "2221010"}, {
    "label": "2221011 应交税费-应交车船使用税",
    "value": "2221011"
  }, {"label": "2221012 应交税费-应交个人所得税", "value": "2221012"}, {
    "label": "2221013 应交税费-教育费附加",
    "value": "2221013"
  }, {"label": "2221014 应交税费-地方教育费附加", "value": "2221014"}, {
    "label": "2221015 应交税费-矿产资源补偿费",
    "value": "2221015"
  }, {"label": "2221016 应交税费-排污费", "value": "2221016"}, {
    "label": "2221017 应交税费-印花税",
    "value": "2221017"
  }, {"label": "2221018 应交税费-预交增值税", "value": "2221018"}, {
    "label": "2221019 应交税费-待抵扣进项税额",
    "value": "2221019"
  }, {"label": "2221020 应交税费-待认证进项税额", "value": "2221020"}, {
    "label": "2221021 应交税费-待转销项税额",
    "value": "2221021"
  }, {"label": "2221022 应交税费-增值税留抵税额", "value": "2221022"}, {
    "label": "2221023 应交税费-简易计税",
    "value": "2221023"
  }, {"label": "2221024 应交税费-转让金融商品应交增值税", "value": "2221024"}, {
    "label": "2221025 应交税费-代扣代交增值税",
    "value": "2221025"
  }, {"label": "2231 应付利息", "value": "2231"}, {"label": "2232 应付利润", "value": "2232"}, {
    "label": "2241 其他应付款",
    "value": "2241"
  }, {"label": "2401 递延收益", "value": "2401"}, {"label": "2501 长期借款", "value": "2501"}, {
    "label": "2701 长期应付款",
    "value": "2701"
  }], "label": "负债", "value": "2"
}, {
  "children": [
    {"label": "3001 实收资本", "value": "3001"}, {
    "label": "3002 资本公积",
    "value": "3002"
  }, {"label": "3101 盈余公积", "value": "3101"}, {
    "label": "3101001 盈余公积-法定盈余公积",
    "value": "3101001"
  }, {"label": "3101002 盈余公积-任意盈余公积", "value": "3101002"}, {
    "label": "3101003 盈余公积-法定公益金",
    "value": "3101003"
  }, {"label": "3103 本年利润", "value": "3103"}, {"label": "3104 利润分配", "value": "3104"}, {
    "label": "3104001 利润分配-其他转入",
    "value": "3104001"
  }, {"label": "3104002 利润分配-提取法定盈余公积", "value": "3104002"}, {
    "label": "3104003 利润分配-提取法定公益金",
    "value": "3104003"
  }, {"label": "3104004 利润分配-提取任意盈余公积", "value": "3104004"}, {
    "label": "3104005 利润分配-应付利润",
    "value": "3104005"
  }, {"label": "3104006 利润分配-未分配利润", "value": "3104006"}], "label": "净资产", "value": "3"
}, {
  "children": [
    {"label": "4001 生产成本", "value": "4001"}, {
    "label": "4101 制造费用",
    "value": "4101"
  }, {"label": "4301 研发支出", "value": "4301"}, {"label": "4401 工程施工", "value": "4401"}, {
    "label": "4403 机械作业",
    "value": "4403"
  }], "label": "收入", "value": "4"
}, {
  "children": [
    {"label": "5001 主营业务收入", "value": "5001"}, {
    "label": "5051 其他业务收入",
    "value": "5051"
  }, {"label": "5111 投资收益", "value": "5111"}, {
    "label": "5301 营业外收入",
    "value": "5301"
  }, {"label": "5301001 营业外收入-非流动资产处置净收益", "value": "5301001"}, {
    "label": "5301002 营业外收入-政府补助",
    "value": "5301002"
  }, {"label": "5301003 营业外收入-捐赠收益", "value": "5301003"}, {
    "label": "5301004 营业外收入-盘盈收益",
    "value": "5301004"
  }, {"label": "5401 主营业务成本", "value": "5401"}, {"label": "5402 其他业务成本", "value": "5402"}, {
    "label": "5403 税金及附加",
    "value": "5403"
  }, {"label": "5601 销售费用", "value": "5601"}, {
    "label": "5601001 销售费用-销售人员职工薪酬",
    "value": "5601001"
  }, {"label": "5601002 销售费用-业务招待费", "value": "5601002"}, {
    "label": "5601003 销售费用-修理费",
    "value": "5601003"
  }, {"label": "5601004 销售费用-办公费", "value": "5601004"}, {
    "label": "5601005 销售费用-水电费",
    "value": "5601005"
  }, {"label": "5601006 销售费用-差旅费", "value": "5601006"}, {
    "label": "5601007 销售费用-折旧费",
    "value": "5601007"
  }, {"label": "5601008 销售费用-摊销费", "value": "5601008"}, {
    "label": "5601009 销售费用-展览费",
    "value": "5601009"
  }, {"label": "5601010 销售费用-商品维修费", "value": "5601010"}, {
    "label": "5601011 销售费用-运输费",
    "value": "5601011"
  }, {"label": "5601012 销售费用-装卸费", "value": "5601012"}, {
    "label": "5601013 销售费用-包装费",
    "value": "5601013"
  }, {"label": "5601014 销售费用-保险费", "value": "5601014"}, {
    "label": "5601015 销售费用-广告费",
    "value": "5601015"
  }, {"label": "5601016 销售费用-业务宣传费", "value": "5601016"}, {
    "label": "5602 管理费用",
    "value": "5602"
  }, {"label": "5602001 管理费用-管理人员职工薪酬", "value": "5602001"}, {
    "label": "5602002 管理费用-业务招待费",
    "value": "5602002"
  }, {"label": "5602003 管理费用-修理费", "value": "5602003"}, {
    "label": "5602004 管理费用-办公费",
    "value": "5602004"
  }, {"label": "5602005 管理费用-水电费", "value": "5602005"}, {
    "label": "5602006 管理费用-差旅费",
    "value": "5602006"
  }, {"label": "5602007 管理费用-折旧费", "value": "5602007"}, {
    "label": "5602008 管理费用-摊销费",
    "value": "5602008"
  }, {"label": "5602009 管理费用-开办费", "value": "5602009"}, {
    "label": "5602010 管理费用-研究费用",
    "value": "5602010"
  }, {"label": "5602011 管理费用-咨询费", "value": "5602011"}, {
    "label": "5602012 管理费用-长期待摊费用摊销",
    "value": "5602012"
  }, {"label": "5603 财务费用", "value": "5603"}, {
    "label": "5603001 财务费用-利息费用",
    "value": "5603001"
  }, {"label": "5603002 财务费用-手续费", "value": "5603002"}, {
    "label": "5603003 财务费用-汇兑损益",
    "value": "5603003"
  }, {"label": "5603004 财务费用-现金折扣", "value": "5603004"}, {
    "label": "5711 营业外支出",
    "value": "5711"
  }, {"label": "5711001 营业外支出-非流动资产处置净损失", "value": "5711001"}, {
    "label": "5711002 营业外支出-赞助支出",
    "value": "5711002"
  }, {"label": "5711003 营业外支出-捐赠支出", "value": "5711003"}, {
    "label": "5711004 营业外支出-盘亏损失",
    "value": "5711004"
  }, {"label": "5711005 营业外支出-坏账损失", "value": "5711005"}, {
    "label": "5711006 营业外支出-存货毁损报废损失",
    "value": "5711006"
  }, {"label": "5711007 营业外支出-无法收回的长期债券投资损失", "value": "5711007"}, {
    "label": "5711008 营业外支出-无法收回的长期股权投资损失",
    "value": "5711008"
  }, {"label": "5711009 营业外支出-自然灾害等不可抗力因素造成的损失", "value": "5711009"}, {
    "label": "5711010 营业外支出-税收滞纳金",
    "value": "5711010"
  }, {"label": "5711011 营业外支出-罚款支出", "value": "5711011"}, {"label": "5801 所得税费用", "value": "5801"}], "label": "费用", "value": "5"
}, {
  "children": [
    {"label": "6000 其他流动资产", "value": "6000"}, {
    "label": "6001 其他非流动资产",
    "value": "6001"
  }, {"label": "8000 其他流动负债", "value": "8000"}, {"label": "8001 其他非流动负债", "value": "8001"}], "label": "其他", "value": "6"
}];

const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
  const option = selectedOptions[i];
  if (i === 0) {
    return;
  }
  return <span key={option.value}>{label}</span>;
});


class SubjectSelector extends PureComponent {
  constructor(props) {
    super(props);

    const values = this.props.value;
    this.state = {
      value: values.value,
    };
  }

  handleSubjectChange = (value, selectedOptions) => {
    selectedOptions.map((item, i) => {
      if (i === 1) {
        this.triggerChange(item);

      }
    });
  };

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  render() {
    return (
      <Cascader
        defaultValue={this.props.value}
        options={subjects}
        placeholder="选择科目"
        showSearch
        displayRender={displayRender}
        onChange={this.handleSubjectChange}
      />
    );
  }
};

export default SubjectSelector;
