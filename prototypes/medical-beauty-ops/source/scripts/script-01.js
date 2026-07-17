
    const stores = [
      { name: "悦颜轻医美·上海静安店", meta: "皮肤管理 / 光电抗衰", leads: "5,286", groups: 42, consult: 1218, rate: 38, repurchase: 86, risk: 1 },
      { name: "芙洛皮肤管理·杭州湖滨店", meta: "生美体验 / 水光复购", leads: "3,142", groups: 28, consult: 836, rate: 31, repurchase: 64, risk: 0 },
      { name: "初见美学·成都太古里店", meta: "抗衰咨询 / 面部年轻化", leads: "2,406", groups: 18, consult: 692, rate: 27, repurchase: 42, risk: 3 },
      { name: "珀妍抗衰中心·深圳南山店", meta: "术后回访 / 老客复购", leads: "2,013", groups: 16, consult: 514, rate: 34, repurchase: 57, risk: 1 }
    ];

    const attributionLeaders = [
      { scope: "门店", name: "悦颜轻医美·上海静安店", leads: 1218, appointments: 463, repurchase: 86, insight: "预约转化 38%，术后回访完成率领先", action: "复制术后关怀 SOP" },
      { scope: "门店", name: "初见美学·成都太古里店", leads: 692, appointments: 187, repurchase: 42, insight: "风险事项 3 项，需优先补齐顾问响应", action: "查看风险队列" },
      { scope: "员工", name: "李运营", leads: 328, appointments: 131, repurchase: 29, insight: "高意向二次跟进转化最高", action: "复制跟进节奏" },
      { scope: "员工", name: "王专员", leads: 286, appointments: 78, repurchase: 34, insight: "水光老客复购贡献最高", action: "套用复购 SOP" }
    ];

    const todos = [
      { title: "术后第 3 天回访 - 张女士", desc: "悦颜轻医美，今日 12:00 前完成", tag: "逾期", type: "去处理", route: "thread-c1", overdue: true, dueSoon: true },
      { title: "光电项目咨询待跟进", desc: "18 位高意向潜客超过 4 小时未回复", tag: "高", type: "去处理", route: "intent-customers", dueSoon: true },
      { title: "七夕皮肤管理群发审批", desc: "芙洛皮肤管理，目标 1,250 人", tag: "审批", type: "去审批", route: "broadcast-approval", dueSoon: true },
      { title: "老客复购提醒执行", desc: "水光复购标签，计划 16:30 发送", tag: "中", type: "去执行", route: "broadcast-running" },
      { title: "敏感肌术后观察回访", desc: "陈女士，需在今日 18:00 前确认恢复情况", tag: "中", type: "去处理", route: "thread-c2" },
      { title: "水光项目预约确认", desc: "6 位客户待确认到店时间", tag: "一般", type: "去处理", route: "intent-customers" },
      { title: "会员权益补发", desc: "7 月生日礼券待核对后发放", tag: "审批", type: "去审批", route: "broadcast-approval" },
      { title: "项目素材审核", desc: "光电抗衰项目图文素材待确认", tag: "一般", type: "去处理", route: "asset-review" }
    ];

    const todayOperations = [
      { id: "post-op-day-3", priority: "P0", title: "张女士术后第 3 天关怀", reason: "客诉关键词 + 已逾期 2 小时 18 分", risk: "未在承诺时限内回应可能升级投诉", impact: "预计挽回 1 位高风险客户并减少退款风险", action: "进入处置", route: "risk" },
      { id: "high-intent", priority: "P1", title: "18 位高意向咨询二次跟进", reason: "超过 4 小时未回复，近 24 小时浏览项目页", risk: "热度衰减，预约意愿下降", impact: "预计新增 3–5 个面诊预约", action: "生成回复", route: "reply" },
      { id: "hydration-rebuy", priority: "P1", title: "水光复购老客权益提醒", reason: "护理后 28–35 天进入复购窗口", risk: "近 7 天触达对象已自动排除", impact: "预计带来 38–52 次预约咨询", action: "使用 SOP", route: "sop-hydration" },
      { id: "approval", priority: "P2", title: "七夕皮肤管理群发审批", reason: "目标客群与素材均已准备完成", risk: "审批前须复核宣传表述与发送时段", impact: "预计覆盖 1,250 位目标客户", action: "查看草稿", route: "broadcast" }
    ];

    const medicalSopTemplates = [
      { id: "post-op", title: "术后 1 / 3 / 7 天关怀", tag: "术后回访", icon: "icon-park-outline:protect", summary: "按恢复节点发送护理提醒、风险问询与复查入口", risk: "含不适升级人工与医生复核规则", effect: "减少失联与客诉升级" },
      { id: "hydration", title: "水光 30 天复购", tag: "水光复购", icon: "icon-park-outline:water-rate", summary: "面向护理后 28–35 天老客，推送权益与预约入口", risk: "自动排除近 7 天已触达客户", effect: "提升复购咨询与预约" },
      { id: "intent", title: "高意向未预约", tag: "高意向咨询", icon: "icon-park-outline:calendar", summary: "针对已咨询未预约客户，补充面诊时段与顾问服务", risk: "超过 2 次未回复则停止自动触达", effect: "提升面诊转化" },
      { id: "dormant", title: "沉默会员唤醒", tag: "沉睡 30 天", icon: "icon-park-outline:alarm", summary: "分层发送皮肤检测、会员权益与轻咨询内容", risk: "不使用焦虑营销或夸大功效表述", effect: "恢复互动并识别可转化客群" }
    ];

    const customerSeeds = [
      { name: "张女士", phone: "138****0921", tags: ["抗衰咨询", "高意向"], owner: "李运营", time: "07-10 09:18", status: "待回访", serviceStage: 2 },
      { name: "陈女士", phone: "136****6817", tags: ["水光复购", "老客"], owner: "王专员", time: "07-10 10:06", status: "可触达", serviceStage: 3 },
      { name: "林女士", phone: "159****2265", tags: ["皮肤管理意向"], owner: "赵运营", time: "07-09 16:42", status: "咨询中" },
      { name: "周女士", phone: "137****3508", tags: ["术后回访"], owner: "李运营", time: "07-09 12:20", status: "待回访" },
      { name: "何女士", phone: "188****7604", tags: ["生美体验"], owner: "王专员", time: "07-08 14:55", status: "已预约" }
    ];

    function buildVirtualCustomers(total = 200) {
      const surnames = ["许", "吴", "郑", "孙", "马", "朱", "胡", "郭", "罗", "梁", "宋", "唐", "韩", "冯", "邓", "曹", "彭", "曾", "萧", "田", "董", "袁", "潘", "蔡", "蒋", "余", "杜", "叶", "程", "苏"];
      const tagGroups = [
        ["抗衰咨询", "高意向"],
        ["水光复购", "老客"],
        ["皮肤管理意向", "敏感肌"],
        ["术后回访", "光电抗衰"],
        ["生美体验", "到店体验"],
        ["祛斑淡斑", "高意向"],
        ["痘肌修护", "皮肤检测"],
        ["轮廓管理", "面部年轻化"],
        ["私密护理", "待培育"],
        ["会员权益", "老客"]
      ];
      const owners = ["李运营", "王专员", "赵运营", "陈内容", "沈管理员", "林主管"];
      const statuses = ["可触达", "咨询中", "待回访", "已预约", "沉默待唤醒"];
      const result = customerSeeds.map((item) => ({ ...item, tags: [...item.tags] }));
      for (let i = result.length; i < total; i += 1) {
        const seq = i + 1;
        const tags = tagGroups[i % tagGroups.length];
        const day = String(10 - (i % 7)).padStart(2, "0");
        const hour = String(9 + (i % 10)).padStart(2, "0");
        const minute = String((i * 7) % 60).padStart(2, "0");
        const prefix = ["131", "132", "135", "136", "137", "138", "139", "150", "158", "159", "186", "188"][i % 12];
        const suffix = String(1000 + ((i * 37) % 9000)).padStart(4, "0");
        result.push({
          name: `${surnames[i % surnames.length]}女士${String(seq).padStart(3, "0")}`,
          phone: `${prefix}****${suffix}`,
          tags: [...tags],
          owner: owners[i % owners.length],
          time: `07-${day} ${hour}:${minute}`,
          status: statuses[i % statuses.length]
        });
      }
      return result;
    }

    const customers = buildVirtualCustomers(200);

    let tagCatalog = [
      { id: "tag_skin_intent", name: "皮肤管理意向", type: "客户标签", group: "需求阶段", status: "启用", updated: "07-10 09:20" },
      { id: "tag_anti_age", name: "抗衰咨询", type: "客户标签", group: "需求阶段", status: "启用", updated: "07-10 09:16" },
      { id: "tag_high_intent", name: "高意向", type: "客户标签", group: "需求阶段", status: "启用", updated: "07-10 08:55" },
      { id: "tag_high_intent_consult", name: "高意向咨询", type: "客户标签", group: "需求阶段", status: "启用", updated: "07-10 08:42" },
      { id: "tag_hydration_rebuy", name: "水光复购", type: "客户标签", group: "需求阶段", status: "启用", updated: "07-09 18:30" },
      { id: "tag_old_customer", name: "老客", type: "客户标签", group: "需求阶段", status: "启用", updated: "07-09 17:26" },
      { id: "tag_sleep", name: "沉睡 30 天", type: "客户标签", group: "需求阶段", status: "停用", updated: "07-08 12:10" },
      { id: "tag_post_follow", name: "术后回访", type: "客户标签", group: "服务节点", status: "启用", updated: "07-10 10:12" },
      { id: "tag_sensitive", name: "客诉敏感", type: "客户标签", group: "服务节点", status: "启用", updated: "07-10 10:05" },
      { id: "tag_arrived", name: "到店体验", type: "客户标签", group: "服务节点", status: "启用", updated: "07-09 15:44" },
      { id: "tag_beauty_trial", name: "生美体验", type: "客户标签", group: "服务节点", status: "启用", updated: "07-09 14:18" },
      { id: "tag_vip_group", name: "VIP群", type: "群标签", group: "群运营", status: "启用", updated: "07-10 09:48" },
      { id: "tag_campaign_group", name: "活动群", type: "群标签", group: "群运营", status: "启用", updated: "07-10 09:10" },
      { id: "tag_consult_group", name: "咨询群", type: "群标签", group: "群运营", status: "启用", updated: "07-09 16:12" },
      { id: "tag_rebuy_group", name: "复购群", type: "群标签", group: "群运营", status: "启用", updated: "07-09 11:35" }
    ];
    let tagGroups = [
      { name: "需求阶段", type: "客户标签" },
      { name: "服务节点", type: "客户标签" },
      { name: "群运营", type: "群标签" }
    ];

    const broadcasts = [
      { title: "七夕皮肤管理活动", target: 5000, success: 4820, fail: 180, status: "发送中", creator: "林主管", time: "07-10", tag: "高意向咨询", assets: ["七夕焕肤海报", "水光复购文案"], operators: ["李运营", "王专员", "赵运营"], sendType: "定时发送" },
      { title: "水光复购提醒", target: 1250, success: 1250, fail: 0, status: "已完成", creator: "李运营", time: "07-09", tag: "水光复购", assets: ["水光复购文案"], operators: ["李运营"], sendType: "定时发送" },
      { title: "光电抗衰科普", target: 860, success: 0, fail: 0, status: "审批中", creator: "陈内容", time: "07-10", tag: "抗衰咨询", assets: ["光电抗衰科普"], operators: ["陈内容"], sendType: "定时发送" },
      { title: "术后关怀第 3 天", target: 88, success: 82, fail: 6, status: "已完成", creator: "王专员", time: "07-08", tag: "术后回访", assets: ["术后注意事项"], operators: ["王专员"], sendType: "立即发送" },
      { title: "老客权益预热草稿", target: 520, success: 0, fail: 0, status: "草稿", creator: "李运营", time: "07-16", tag: "水光复购", assets: ["水光复购文案"], operators: ["李运营"], sendType: "定时发送" },
      { title: "高意向客户预约提醒", target: 360, success: 0, fail: 0, status: "待定时发送", creator: "林主管", time: "07-17", tag: "高意向咨询", assets: ["七夕焕肤海报"], operators: ["李运营"], sendType: "定时发送" },
      { title: "VIP 水光复购群", target: 12, success: 0, fail: 0, status: "待员工确认", creator: "王专员", time: "07-17", targetType: "客户群", executionMode: "员工确认", tag: "VIP群", assets: ["水光复购文案"], operators: ["王专员"], sendType: "定时发送" },
      { title: "敏感肌活动调整", target: 260, success: 0, fail: 0, status: "已驳回", creator: "陈内容", time: "07-15", tag: "抗衰咨询", assets: ["水光复购文案"], operators: ["陈内容"], sendType: "定时发送" },
      { title: "历史节日触达", target: 420, success: 0, fail: 0, status: "已终止", creator: "林主管", time: "07-12", tag: "高意向咨询", assets: ["七夕焕肤海报"], operators: ["李运营"], sendType: "定时发送" }
    ];

    // 群发任务只通过 transitionBroadcast() 改变状态；列表、审批队列和详情共用此模型。
    const broadcastStates = {
      "草稿": { tone: "", next: ["审批中"] },
      "审批中": { tone: "rose", next: ["待定时发送", "待员工确认", "已驳回", "已终止"] },
      "待定时发送": { tone: "amber", next: ["发送中", "已终止"] },
      "待员工确认": { tone: "amber", next: ["发送中", "已终止"] },
      "发送中": { tone: "amber", next: ["已完成", "已终止"] },
      "已完成": { tone: "green", next: [] },
      "已驳回": { tone: "rose", next: ["草稿"] },
      "已终止": { tone: "red", next: [] }
    };
    const legacyBroadcastStatus = { "执行中": "发送中", "待审批": "审批中", "待执行": "待定时发送", "已退回": "已驳回" };
    function broadcastNow() { return "2026-07-16 10:30"; }
    function normalizeBroadcast(task, index) {
      const status = legacyBroadcastStatus[task.status] || task.status || "草稿";
      const targetType = task.targetType || (index === 3 ? "客户群" : "客户");
      const executionMode = task.executionMode || (index === 2 ? "员工确认" : "管理员直发");
      const target = Number(task.target) || 0;
      return {
        ...task, id: task.id || `broadcast-${index + 1}`, status, targetType,
        sendMode: task.sendMode || task.sendType || "定时发送", executionMode,
        riskResult: task.riskResult || { checkedAt: "2026-07-10 09:00", items: [{ name: "频控", level: "通过", affected: 0 }, { name: "P0 客诉冲突", level: "通过", affected: 0 }, { name: "高风险人群", level: "已排除", affected: 0 }] },
        approvalHistory: task.approvalHistory || (status === "审批中" ? [{ node: "提交审批", operator: task.creator, time: "2026-07-10 10:00", note: "已提交内容、客群与时段复核" }] : []),
        execution: task.execution || { paused: false, pending: Math.max(0, target - (Number(task.success) || 0) - (Number(task.fail) || 0)), failureReasons: task.fail ? [{ reason: "客户拒收或会话不可达", count: task.fail }] : [], p0Alert: false },
        review: task.review || (status === "已完成" ? { clickRate: targetType === "客户群" ? "18.6% 群互动" : "22.4% 点击", conversion: targetType === "客户群" ? "6.3% 入群留存" : "8.7% 到店", churn: targetType === "客户群" ? "退群 0.8%" : "退订 0.3%" } : null),
        archived: Boolean(task.archived), recipients: task.recipients || Array.from({ length: Math.min(target, 6) }, (_, i) => ({ id: `${task.id || index}-${i}`, name: targetType === "客户群" ? `客户群 ${i + 1}` : `客户 ${i + 1}`, issue: i === 0 ? "近 7 天已触达" : "" })),
        operationLog: task.operationLog || []
      };
    }
    broadcasts.splice(0, broadcasts.length, ...broadcasts.map(normalizeBroadcast));

    const assets = [
      { title: "七夕焕肤海报", type: "图片", dir: "节日营销", project: "皮肤管理", channel: "朋友圈", status: "可用", creator: "陈内容", updated: "07-10", size: "1080×1440", package: "七夕焕肤活动包", tags: ["七夕活动", "朋友圈", "高意向"], uses: 28, favorite: true, icon: "icon-park-outline:pic", image: "assets/materials/qixi-skin-care-poster.png", refs: ["七夕皮肤管理活动", "朋友圈：七夕焕肤活动"] },
      { title: "水光复购文案", type: "文本", dir: "复购提醒", project: "水光项目", channel: "群发", status: "可用", creator: "李运营", updated: "07-09", size: "320 字", package: "水光复购运营包", tags: ["水光复购", "老客", "群发"], uses: 43, favorite: true, icon: "icon-park-outline:doc-detail", image: "assets/materials/hydration-repurchase.png", content: "亲爱的{客户称呼}，感谢您选择本院水光护理。根据本次护理周期，建议您在 21—28 天后完成复购巩固，让肌肤维持稳定的水润与细腻状态。\n\n本周到店可享老客专属复购权益：预约即赠专业皮肤检测一次；如需为您保留合适时段，直接回复「预约」即可，顾问会在服务时间内与您确认。\n\n温馨提示：具体治疗方案、效果与恢复情况需由医生结合您的皮肤状态评估；如近期有不适或特殊情况，请先联系您的专属顾问。", refs: ["水光复购提醒", "老客复购提醒执行"] },
      { title: "光电抗衰科普", type: "视频", dir: "项目科普", project: "光电抗衰", channel: "公众号", status: "待审核", creator: "陈内容", updated: "07-08", size: "00:42", package: "光电抗衰项目包", tags: ["项目科普", "抗衰咨询"], uses: 12, icon: "icon-park-outline:play", image: "assets/materials/photoaging-science.png", video: "assets/materials/cc0-flower-demo.mp4", videoNote: "CC0 演示片段，仅用于原型播放能力展示", refs: ["光电抗衰科普"] },
      { title: "术后注意事项", type: "文件", dir: "术后关怀", project: "术后关怀", channel: "会话", status: "可用", creator: "王专员", updated: "07-07", size: "PDF · 3 页", package: "术后关怀包", tags: ["术后回访", "客诉敏感"], uses: 19, icon: "icon-park-outline:protect", fileName: "术后注意事项（治疗后 72 小时）.pdf", fileSize: "1.8 MB", fileDescription: "包含治疗后 24 / 48 / 72 小时的护理要点、常见反应说明及需及时联系医生的风险提示。", refs: ["术后关怀第 3 天"] },
      { title: "敏感肌修护 FAQ", type: "文本", dir: "项目科普", project: "皮肤管理", channel: "会话", status: "已过期", creator: "陈内容", updated: "07-06", size: "680 字", package: "项目科普内容包", tags: ["敏感肌", "项目科普"], uses: 31, icon: "icon-park-outline:doc-detail", content: "Q：敏感期可以做皮肤管理吗？\nA：需要先由专业人员评估皮肤屏障状态；出现持续泛红、刺痛或破损时，应暂停刺激性护理并优先就医。\n\nQ：修护期如何安排日常护肤？\nA：建议以温和清洁、保湿和防晒为主，避免频繁叠加高浓度活性成分。\n\nQ：多久可以恢复项目治疗？\nA：恢复时间因人而异，请以医生或治疗师的评估为准。", refs: ["话术库：皮肤检测引导"] },
      { title: "老客复购权益图", type: "图片", dir: "复购提醒", project: "水光项目", channel: "朋友圈", status: "可用", creator: "林主管", updated: "07-05", size: "1080×1080", package: "老客复购内容包", tags: ["老客", "水光复购"], uses: 17, icon: "icon-park-outline:pic", image: "assets/materials/member-benefits.png", refs: ["水光复购提醒"] },
      { title: "七夕焕肤海报旧版", type: "图片", dir: "节日营销", project: "皮肤管理", channel: "朋友圈", status: "已归档", creator: "陈内容", updated: "07-01", size: "1080×1440", package: "七夕焕肤活动包", tags: ["七夕活动", "旧版本"], uses: 6, icon: "icon-park-outline:pic", image: "assets/materials/qixi-skin-care-poster.png", refs: ["历史版本记录"] }
    ];

    const assetPackages = [
      { title: "七夕焕肤活动包", dir: "节日营销", project: "皮肤管理", scene: "七夕活动", updated: "07-10", count: 15, image: "assets/materials/qixi-skin-care-poster.png", uses: 128, types: { 图片: 8, 文案: 4, 视频: 2, 文件: 1 }, tags: ["七夕活动", "朋友圈", "高意向"], owners: ["陈", "李", "林"], createdBy: "林主管", status: "可用", favorite: true },
      { title: "水光复购运营包", dir: "复购提醒", project: "水光项目", scene: "老客复购", updated: "07-09", count: 12, image: "assets/materials/hydration-repurchase.png", uses: 86, types: { 图片: 6, 文案: 3, 视频: 2, 文件: 1 }, tags: ["水光复购", "老客", "群发"], owners: ["李", "王"], status: "可用", favorite: true },
      { title: "光电抗衰项目包", dir: "项目科普", project: "光电抗衰", scene: "项目科普", updated: "07-08", count: 18, image: "assets/materials/photoaging-science.png", uses: 156, types: { 图片: 10, 文案: 4, 视频: 3, 文件: 1 }, tags: ["光电抗衰", "项目科普"], owners: ["陈", "赵"], status: "待审核" },
      { title: "术后关怀包", dir: "术后关怀", project: "术后关怀", scene: "术后第 3 天", updated: "07-07", count: 8, uses: 64, types: { 图片: 4, 文案: 3, 视频: 1, 文件: 0 }, tags: ["术后回访", "客诉敏感"], owners: ["王"], status: "可用" },
      { title: "新客转化全套素材", dir: "节日营销", project: "皮肤管理", scene: "新客转化", updated: "07-05", count: 20, image: "assets/materials/member-benefits.png", uses: 200, types: { 图片: 12, 文案: 5, 视频: 2, 文件: 1 }, tags: ["到店体验", "高意向"], owners: ["林", "赵"], status: "可用" },
      { title: "项目科普内容包", dir: "项目科普", project: "水光项目", scene: "项目科普", updated: "07-04", count: 14, image: "assets/materials/photoaging-science.png", uses: 73, types: { 图片: 7, 文案: 5, 视频: 1, 文件: 1 }, tags: ["项目科普", "敏感肌"], owners: ["陈", "李"], status: "已过期" },
      { title: "老客复购内容包", dir: "复购提醒", project: "水光项目", scene: "老客复购", updated: "07-03", count: 16, image: "assets/materials/member-benefits.png", uses: 118, types: { 图片: 9, 文案: 4, 视频: 2, 文件: 1 }, tags: ["老客", "会员权益"], owners: ["林", "王"], status: "可用" }
    ];

    const conversationThreads = [
      {
        id: "c1",
        type: "单客",
        title: "张女士",
        meta: "单客会话 · 悦颜轻医美 · 归属员工 李运营",
        tags: ["客诉敏感", "术后回访"],
        status: "风险",
        owner: "李运营",
        summary: "术后泛红，提到退款",
        side: { source: "企微渠道活码", project: "光电抗衰", risk: "高", note: "触发词：退款、担心" },
        messages: [
          { from: "张女士", role: "customer", time: "07-10 10:15", text: "我昨天做完项目后有点红，是不是要<mark>退款</mark>？" },
          { from: "李运营", role: "staff", time: "07-10 10:17", text: "张女士您好，我先帮您安排顾问复核，术后泛红通常会在 24-48 小时缓解。" },
          { from: "张女士", role: "customer", time: "07-10 10:23", text: "那麻烦尽快联系我，我有点担心。" }
        ]
      },
      {
        id: "c2",
        type: "单客",
        title: "陈女士",
        meta: "单客会话 · 芙洛皮肤管理 · 归属员工 王专员",
        tags: ["水光复购", "老客"],
        status: "待回复",
        owner: "王专员",
        summary: "咨询水光复购套餐",
        side: { source: "老客复购群", project: "水光复购", risk: "无", note: "建议发送复购权益和预约档期" },
        messages: [
          { from: "陈女士", role: "customer", time: "07-10 09:46", text: "上次水光做完感觉不错，这个月还有复购活动吗？" },
          { from: "王专员", role: "staff", time: "07-10 09:51", text: "有的，老客复购可以保留上次方案，并赠送一次皮肤检测。" }
        ]
      },
      {
        id: "g1",
        type: "群聊",
        title: "悦颜静安-焕肤福利群",
        meta: "群聊 · 198 人 · 群主 李运营",
        tags: ["VIP群", "活动群"],
        status: "活跃",
        owner: "李运营",
        summary: "群内咨询七夕焕肤活动",
        side: { source: "外部客户群", project: "七夕焕肤", risk: "无", note: "适合推送活动 FAQ 和预约入口" },
        messages: [
          { from: "林女士", role: "customer", time: "07-10 14:18", text: "七夕焕肤活动可以两个人一起预约吗？" },
          { from: "李运营", role: "staff", time: "07-10 14:20", text: "可以，双人同行可以优先安排同一时段。" },
          { from: "周女士", role: "customer", time: "07-10 14:23", text: "敏感肌可以参加吗？" }
        ]
      },
      {
        id: "c3",
        type: "单客",
        title: "林女士",
        meta: "单客会话 · 初见美学 · 归属员工 赵运营",
        tags: ["皮肤管理意向", "高意向"],
        status: "待回复",
        owner: "赵运营",
        summary: "询问皮肤检测和修护方案",
        side: { source: "公众号扫码", project: "皮肤管理", risk: "无", note: "建议引导到店检测" },
        messages: [
          { from: "林女士", role: "customer", time: "07-10 13:40", text: "最近换季皮肤很不稳定，可以先做检测吗？" },
          { from: "赵运营", role: "staff", time: "07-10 13:45", text: "可以，我们会先做皮肤检测，再根据状态建议修护方案。" }
        ]
      },
      {
        id: "g2",
        type: "群聊",
        title: "芙洛湖滨-水光复购群",
        meta: "群聊 · 156 人 · 群主 王专员",
        tags: ["复购群", "水光复购"],
        status: "待回复",
        owner: "王专员",
        summary: "老客询问复购档期",
        side: { source: "外部客户群", project: "水光复购", risk: "无", note: "建议同步本周剩余预约时段" },
        messages: [
          { from: "陈女士", role: "customer", time: "07-10 11:02", text: "周末还有水光的名额吗？" },
          { from: "王专员", role: "staff", time: "07-10 11:05", text: "周六下午还有 2 个档期，稍后我发预约入口。" }
        ]
      },
      {
        id: "g3",
        type: "群聊",
        title: "初见美学-抗衰咨询群",
        meta: "群聊 · 86 人 · 群主 赵运营",
        tags: ["咨询群", "抗衰咨询"],
        status: "待回复",
        owner: "赵运营",
        summary: "群内咨询抗衰项目恢复期",
        side: { source: "外部客户群", project: "抗衰咨询", risk: "无", note: "适合发送抗衰项目科普素材" },
        messages: [
          { from: "何女士", role: "customer", time: "07-09 18:32", text: "抗衰项目做完会不会影响第二天上班？" },
          { from: "赵运营", role: "staff", time: "07-09 18:40", text: "不同项目恢复期不同，可以先做面诊评估。" }
        ]
      }
    ];

    const groupSeeds = [
      { id: "g1", name: "悦颜静安-焕肤福利群", meta: "外部客户群", members: 198, owner: "李运营", tag: "VIP群", active: "07-10 14:23", store: "悦颜轻医美·上海静安店", created: "2026-03-15", notice: "本周焕肤福利与预约档期已更新，请按需领取权益。" },
      { id: "g2", name: "芙洛湖滨-水光复购群", meta: "老客复购", members: 156, owner: "王专员", tag: "复购群", active: "07-10 11:08", store: "芙洛皮肤管理·杭州湖滨店", created: "2026-03-12", notice: "水光复购档期开放中，咨询可回复本周剩余时间。" },
      { id: "g3", name: "初见美学-抗衰咨询群", meta: "项目咨询", members: 86, owner: "赵运营", tag: "咨询群", active: "07-09 18:40", store: "初见美学·成都太古里店", created: "2026-03-08", notice: "抗衰项目恢复期问题请先按标准答疑口径回复。" }
    ];
    const groupStores = ["悦颜静安", "芙洛湖滨", "初见美学", "珀妍南山", "美洛国贸"];
    const groupThemes = [
      { tag: "VIP群", meta: "外部客户群", name: "焕肤福利群" },
      { tag: "复购群", meta: "老客复购", name: "水光复购群" },
      { tag: "咨询群", meta: "项目咨询", name: "抗衰咨询群" },
      { tag: "活动群", meta: "活动承接", name: "周年活动群" }
    ];
    const groupOwners = ["李运营", "王专员", "赵运营", "钱主管", "陈顾问"];
    const groups = Array.from({ length: 100 }, (_, index) => {
      if (index < groupSeeds.length) return groupSeeds[index];
      const sequence = index + 1;
      const theme = groupThemes[index % groupThemes.length];
      const store = groupStores[index % groupStores.length];
      return {
        id: `g${sequence}`,
        name: `${store}-${theme.name}${String(sequence).padStart(3, "0")}`,
        meta: theme.meta,
        members: 52 + ((index * 23) % 247),
        owner: groupOwners[index % groupOwners.length],
        tag: theme.tag,
        active: `07-${String(10 - (index % 7)).padStart(2, "0")} ${String(9 + (index % 10)).padStart(2, "0")}:${String((index * 7) % 60).padStart(2, "0")}`,
        store: `${store}门店`,
        created: `2026-${String(1 + (index % 6)).padStart(2, "0")}-${String(1 + (index % 26)).padStart(2, "0")}`,
        notice: `${theme.name.replace("群", "")}相关咨询请优先按当前标准口径回复，必要时转交门店顾问跟进。`
      };
    });

    const batchTasks = [
      { time: "07-10 14:00", total: 200, success: 156, fail: 44, status: "执行中" },
      { time: "07-09 10:00", total: 50, success: 50, fail: 0, status: "已完成" }
    ];

    const inviteTasks = [
      { title: "新品体验群", group: "悦颜静安-焕肤福利群", target: 200, success: 198, fail: 2, status: "已完成", time: "07-09" },
      { title: "VIP 客户群", group: "芙洛湖滨-水光复购群", target: 500, success: "-", fail: "-", status: "待执行", time: "07-10" }
    ];

    const migrationTasks = [
      { from: "李运营", to: "王专员", scope: "悦颜静安店 200 位潜客", status: "待迁移", progress: 0, count: 200 },
      { from: "赵运营", to: "钱主管", scope: "初见美学抗衰咨询 200 位潜客", status: "迁移中", progress: 78, count: 200 },
      { from: "王专员", to: "李运营", scope: "芙洛皮肤管理 89 位老客", status: "已完成", progress: 100, count: 89 },
      { from: "陈内容", to: "李运营", scope: "素材触达客户 47 位", status: "失败", progress: 0, count: 47 }
    ];

    const blacklist = [
      { customer: "吴女士086", reason: "薅羊毛", time: "07-09 18:20", operator: "林主管" },
      { customer: "张女士", reason: "客诉高风险", time: "07-10 10:40", operator: "李运营" }
    ];

    const channelCodes = [
      { name: "小红书引流", today: 23, total: 1245, assign: "空闲优先", status: "启用" },
      { name: "抖音广告", today: 45, total: 3890, assign: "轮流分配", status: "启用" },
      { name: "公众号菜单", today: 5, total: 832, assign: "固定员工", status: "停用" }
    ];

    const growthExperiments = [
      { id: "exp-hydration", name: "水光复购：权益版 vs 检测版", channel: "企微单聊", audience: "水光复购老客", control: "预约率 4.8%", variant: "预约率 6.3%", lift: "+31%", sample: "A/B 各 620 人", confidence: "置信度 95%，样本达标", guardrail: "投诉率超过 0.4% 自动暂停", status: "进行中" },
      { id: "exp-qixi", name: "七夕焕肤：海报 A/B", channel: "朋友圈", audience: "高意向咨询", control: "到店率 8.1%", variant: "到店率 9.4%", lift: "+16%", sample: "A/B 各 1,200 人", confidence: "置信度 92%，方向有效", guardrail: "同一客户仅进入一个实验组", status: "已完成" }
    ];

    const roiReviews = [
      { channel: "抖音广告", spend: "¥18,600", leads: 286, appointments: 71, revenue: "¥96,800", profit: "¥29,200", profitRoi: "1.6", attribution: "首触点归因", insight: "预约成本偏高，建议缩减泛人群" },
      { channel: "小红书引流", spend: "¥8,400", leads: 192, appointments: 66, revenue: "¥88,200", profit: "¥41,500", profitRoi: "4.9", attribution: "多触点线性归因", insight: "高意向占比高，建议加大皮肤检测内容" },
      { channel: "企微复购", spend: "¥2,100", leads: 124, appointments: 48, revenue: "¥74,600", profit: "¥48,900", profitRoi: "23.3", attribution: "末触点 + 服务归因", insight: "复购效率最高，持续复用水光 SOP" }
    ];

    const integrationAdapters = [
      { name: "企业微信", status: "模拟已连通", events: "客户联系、会话、群发回执", note: "原型事件适配层；生产需配置客户联系与会话存档权限" },
      { name: "预约与排班", status: "待接入", events: "预约、到店、医生排班", note: "需对接 HIS / 预约系统 API，当前用服务节点模拟" },
      { name: "交易与核销", status: "待接入", events: "订单、核销、退款", note: "需对接 POS / 商城；利润口径已预留退款与履约成本" }
    ];

    const approvalPolicy = { scope: "医美群发", rule: "≥500 人或含疗效/价格表达", approvers: "门店负责人 + 合规审核", sla: "30 分钟", escalation: "超时升级运营负责人" };

    const tagGroupTasks = [
      { title: "VIP客户群", rule: "高意向 + 老客", target: 1250, groups: 7, status: "执行中" },
      { title: "新客体验群", rule: "皮肤管理意向", target: 320, groups: 2, status: "已完成" }
    ];

    const moments = [
      { title: "七夕焕肤活动图文", staff: "李运营等3人", time: "07-15 10:00", views: 856, tags: 320, status: "定时" },
      { title: "水光复购权益提醒", staff: "王专员", time: "07-10 16:30", views: 423, tags: 126, status: "已发送" }
    ];

    const scripts = [
      {
        id: "sp-water-repurchase",
        title: "水光复购触达包",
        group: "客户复购",
        collection: "水光复购",
        scope: "团队话术",
        ownerType: "团队",
        scene: "术后关怀",
        stage: "老客复购",
        channels: ["单聊", "群发", "短信"],
        projects: ["水光项目", "光电抗衰"],
        status: "已发布",
        scriptCount: 12,
        nodes: 5,
        uses: 1245,
        conversion: 18.6,
        updated: "07-10",
        creator: "王专员",
        favorite: true,
        content: "您好，老客本周可保留原水光方案权益，并赠送一次皮肤检测。"
      },
      {
        id: "sp-aftercare-standard",
        title: "术后关怀标准包",
        group: "服务跟进",
        collection: "术后关怀",
        scope: "企业话术",
        ownerType: "企业",
        scene: "术后关怀",
        stage: "服务跟进",
        channels: ["单聊", "群发"],
        projects: ["水光项目", "光电抗衰", "注射"],
        status: "已发布",
        scriptCount: 18,
        nodes: 7,
        uses: 2368,
        conversion: 22.3,
        updated: "07-09",
        creator: "林主管",
        favorite: false,
        content: "您好，我先帮您同步门店顾问。术后轻微泛红通常会在 24-48 小时内缓解，请先避免高温环境和刺激性护肤。"
      },
      {
        id: "sp-new-customer",
        title: "新客咨询转化包",
        group: "客户转化",
        collection: "新客咨询",
        scope: "团队话术",
        ownerType: "团队",
        scene: ["新客咨询", "术后关怀"],
        stage: "新客转化",
        channels: ["单聊", "群发", "企微加友"],
        projects: ["全项目", "水光项目"],
        status: "已发布",
        scriptCount: 15,
        nodes: 6,
        uses: 3456,
        conversion: 16.8,
        updated: "07-08",
        creator: "赵运营",
        favorite: false,
        content: "您好，可以先告诉我您最关注的皮肤问题，我会根据肤质和期望效果为您匹配适合的项目与到店检测。"
      },
      {
        id: "sp-complaint-care",
        title: "客诉安抚话术包",
        group: "服务跟进",
        collection: "客诉安抚",
        scope: "企业话术",
        ownerType: "企业",
        scene: "术后关怀",
        stage: "风险关怀",
        channels: ["单聊", "群发"],
        projects: ["全项目", "水光项目"],
        status: "已发布",
        scriptCount: 10,
        nodes: 4,
        uses: 856,
        conversion: 9.4,
        updated: "07-07",
        creator: "沈管理员",
        favorite: true,
        content: "理解您的担心，我已第一时间记录情况并同步主管和门店顾问，会在 30 分钟内给您明确回复。"
      },
      {
        id: "sp-booking-push",
        title: "预约促单话术包",
        group: "客户转化",
        collection: "预约促单",
        scope: "个人话术",
        ownerType: "个人",
        scene: "术后关怀",
        stage: "预约转化",
        channels: ["单聊", "短信"],
        projects: ["水光项目", "注射"],
        status: "待更新",
        scriptCount: 9,
        nodes: 3,
        uses: 1125,
        conversion: 14.2,
        updated: "07-06",
        creator: "李运营",
        favorite: false,
        content: "本周门店还有两个检测名额，我可以先帮您保留，确认时间后再安排顾问一对一沟通。"
      },
      {
        id: "sp-old-customer-wakeup",
        title: "老客唤醒召回包",
        group: "客户复购",
        collection: "老客唤醒",
        scope: "团队话术",
        ownerType: "团队",
        scene: "术后关怀",
        stage: "沉睡唤醒",
        channels: ["群发", "短信", "单聊"],
        projects: ["水光项目", "光电抗衰"],
        status: "已停用",
        scriptCount: 11,
        nodes: 4,
        uses: 2014,
        conversion: 12.7,
        updated: "07-05",
        creator: "陈内容",
        favorite: false,
        content: "距离您上次到店已有一段时间，本周可免费复测肤质，并由顾问更新后续护理建议。"
      }
    ];

    const promos = [
      { name: "夏日护肤节", scans: 2340, converts: 856 },
      { name: "新品体验官", scans: 1890, converts: 423 }
    ];

    const customForms = [
      { name: "肤质调查", submits: 856, fields: 5, tag: "表单_肤质调查" },
      { name: "术后反馈", submits: 423, fields: 8, tag: "表单_术后反馈" }
    ];

    const radars = [
      { name: "热玛吉项目介绍", type: "链接", today: 12, total: 856, tag: "意向_热玛吉" },
      { name: "项目价目表", type: "文件", today: 5, total: 423, tag: "价格敏感" }
    ];

    const fraudTasks = [
      { name: "618秒杀活动", users: 5200, blocked: 127, status: "监控中" },
      { name: "新品体验官", users: 2340, blocked: 34, status: "已结束" }
    ];

    const memberStats = [
      { staff: "李运营", newCustomers: 86, chats: 342, broadcasts: 12, followRate: "89%", response: "2.3min" },
      { staff: "王专员", newCustomers: 45, chats: 180, broadcasts: 8, followRate: "76%", response: "5.1min" },
      { staff: "赵运营", newCustomers: 23, chats: 95, broadcasts: 5, followRate: "92%", response: "1.8min" }
    ];

    const liveStats = [
      { title: "热玛吉科普", viewers: 856, comments: 342, avg: "18min", tag: "意向_热玛吉", desc: "观看 8 分钟以上且有评论互动的潜客" },
      { title: "夏季护肤", viewers: 423, comments: 156, avg: "22min", tag: "需求_夏季护肤", desc: "关注换季护理、屏障修护和补水项目的潜客" }
    ];

    const qrStats = [
      { staff: "李运营", generated: 856, scans: 520, added: 86 },
      { staff: "王专员", generated: 423, scans: 210, added: 45 }
    ];

    const operationLogs = [
      { time: "07-10 14:42", staff: "李运营", type: "加入黑名单", object: "张女士", detail: "客诉高风险" },
      { time: "07-10 13:18", staff: "王专员", type: "创建群发", object: "水光复购", detail: "目标 1250 人" },
      { time: "07-10 12:05", staff: "林主管", type: "编辑权限", object: "王专员", detail: "新增营销中心权限" }
    ];

    const accounts = [
      { id: "admin", name: "沈管理员", login: "shen.admin", role: "管理员", scope: "全部医美客户", last: "2026-07-10 09:12", status: "启用", menus: 5 },
      { id: "manager", name: "林主管", login: "lin.manager", role: "运营主管", scope: "全部医美客户", last: "2026-07-10 09:42", status: "启用", menus: 5 },
      { id: "operator", name: "李运营", login: "li.ops", role: "运营专员", scope: "悦颜轻医美", last: "2026-07-10 10:18", status: "启用", menus: 4 },
      { id: "content", name: "陈内容", login: "chen.content", role: "内容运营", scope: "素材与标签", last: "2026-07-09 18:12", status: "启用", menus: 3 },
      { id: "auditor", name: "周审核", login: "zhou.audit", role: "风控审核员", scope: "风控会话", last: "2026-07-10 08:55", status: "停用", menus: 2 }
    ];

    const permissionModules = [
      { key: "dashboard", label: "工作台" },
      { key: "customers", label: "客户运营" },
      { key: "marketing", label: "营销中心" },
      { key: "assets", label: "素材与标签" },
      { key: "ai", label: "AI助手" },
      { key: "data", label: "数据中心" },
      { key: "settings", label: "系统管理" }
    ];

    const rolePermissionDefaults = {
      "管理员": ["dashboard", "customers", "marketing", "assets", "ai", "data", "settings"],
      "运营主管": ["dashboard", "customers", "marketing", "assets", "ai", "data", "settings"],
      "运营专员": ["dashboard", "customers", "marketing", "assets", "ai"],
      "内容运营": ["dashboard", "marketing", "assets", "ai"],
      "风控审核员": ["dashboard", "customers", "ai", "data"]
    };

    const scopeOptions = ["全部医美客户", "悦颜轻医美", "芙洛皮肤管理", "初见美学", "素材与标签", "风控会话"];

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => Array.from(document.querySelectorAll(selector));
    const avatarAssets = {
      customer: "assets/avatars/customer-avatar.png",
      staff: "assets/avatars/staff-avatar.png",
      group: "assets/avatars/group-avatar.png"
    };
    let selectedCustomerIndex = 0;
    let checkedCustomerIndexes = new Set([0, 1, 2]);
    let checkedGroupIds = new Set();
    let broadcastSource = "all";
    let tagSelection = new Set();
    let tagMode = "batch";
    let tagTargetScope = "selected";
    let editingTagId = null;
    let tagManageTypeFilter = "类型：全部";
    let tagManageGroupFilter = "分组：全部";
    let currentAccountId = "manager";
    let editingAccountId = null;
    let broadcastStep = 1;
    let broadcastTargetType = "潜客";
    let broadcastSendType = "定时单次";
    let broadcastFilterMode = "smart";
    let broadcastExecutionMode = "管理员直发";
    let broadcastOperators = new Set(["李运营", "王专员", "赵运营"]);
    let activeThreadId = "c1";
    let conversationDetailTab = "record";
    let assetTypeFilter = "全部";
    let assetDirFilter = "全部素材";
    let assetScopeFilter = "全部素材";
    let assetStatusFilter = "全部状态";
    let assetViewMode = "grid";
    let activeAssetModule = "library";
    const lastSubscreenByScreen = {};
    let selectedAssetTitle = "";
    let selectedAssetPackage = "七夕焕肤活动包";
    let selectedAssetPackageDetail = "";
    let assetPackageSort = { key: "updated", direction: "desc" };
    let selectedAssetTitles = new Set();
    let assetPackageCreateStep = 1;
    let assetPackageDraftTitles = new Set();
    let customerFilter = "全部潜客";
    let customerPage = 1;
    let dashboardCustomerTotal = 12847;
    let dashboardTodayNew = 86;
    let syncRunning = false;
    let syncSequence = 0;
    const customerPageSize = 10;
    let selectedGroupId = "g1";
    let groupPage = 1;
    const groupPageSize = 10;
    let selectedCustomFormIndex = 0;
    let customFormFieldSelection = new Set(["姓名", "手机号", "肤质", "关注项目"]);
    let conversationFilter = "全部会话";
    let conversationAiStatus = "待人工确认";
    let conversationAiReview = "";
    let wecomSyncStatus = "healthy";
    let wecomSyncReason = "";
    let aiCopyHistory = [];
    let selectedLiveTitle = "热玛吉科普";
    let broadcastFilter = "全部";
    let selectedBroadcastIndex = 0;
    let selectedPreviewAsset = null;
    let uploadContext = "library";
    let selectedUploadFile = null;
    let uploadTagSelection = new Set(["节日营销", "皮肤管理"]);
    let selectedBroadcastAssets = new Set(["水光复购文案", "七夕焕肤海报"]);
    let assistantHoverCloseTimer = null;
    let assistantLastResult = {
      title: "等待操作",
      text: "点击推荐操作后，AI 会把结果写入对应页面，例如回复框、打标弹窗、群发向导或任务列表。",
      tags: []
    };
    let scriptResourceFilter = "全部话术";
    let scriptCollectionFilter = "全部";
    let scriptViewMode = "packages";
    let scriptDetailId = null;
    let openScriptFilterKey = null;
    let scriptFilters = {
      scope: "全部",
      scene: "术后关怀",
      stage: "全部",
      channel: "单聊",
      project: "水光项目",
      status: "全部"
    };
    let selectedScriptIds = new Set(["sp-water-repurchase", "sp-aftercare-standard", "sp-complaint-care"]);
    let scriptAdvancedFilters = { creator: "全部", minConversion: 0 };
    let scriptSortMode = "默认排序";
    let dashboardTodoView = "todo";
    let todoPageFilter = "pending";
    const completedTodos = [];
    let pendingWorkflow = null;
    let savedWelcomeConfig = {
      friend: "您好，我是[员工姓名]，很高兴为您服务。可以把您的皮肤状态和想改善的问题发给我。",
      group: "欢迎加入[群名称]，请查看群公告了解福利和群规。"
    };
    let aiConfig = { copy: true, risk: true, threshold: 85, review: true };
    const scriptFilterOptions = {
      scope: ["全部", "企业话术", "团队话术", "个人话术"],
      scene: ["全部", "新客咨询", "术后关怀", "客户复购", "风险关怀"],
      stage: ["全部", "新客转化", "预约转化", "老客复购", "沉睡唤醒", "服务跟进"],
      channel: ["全部", "单聊", "群发", "短信", "企微加友"],
      project: ["全部", "水光项目", "光电抗衰", "注射", "全项目"],
      status: ["全部", "已发布", "待审核", "待更新", "已停用"]
    };
    const scriptFilterLabels = {
      scope: "归属范围",
      scene: "业务场景",
      stage: "客户阶段",
      channel: "使用渠道",
      project: "所属项目",
      status: "状态"
    };

    function chipClass(value) {
      const text = String(value);
      if (text.includes("高危") || text.includes("客诉") || text.includes("退款") || text.includes("删除") || text.includes("失败")) return "red";
      if (String(value).includes("复购") || String(value).includes("老客")) return "rose";
      if (text.includes("风险") || text.includes("逾期") || text.includes("待") || Number(value) > 1) return "amber";
      return "";
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[character]);
    }

    function tagUsage(tag) {
      if (tag.type === "群标签") return groups.filter((group) => groupTagNames(group).includes(tag.name)).length;
      return customers.filter((customer) => customer.tags.includes(tag.name)).length;
    }

    function activeCustomerTags() {
      return tagCatalog
        .filter((tag) => tag.type === "客户标签" && tag.status === "启用")
        .map((tag) => tag.name);
    }

    function activeGroupTags() {
      return tagCatalog
        .filter((tag) => tag.type === "群标签" && tag.status === "启用")
        .map((tag) => tag.name);
    }

    function groupTagNames(group) {
      const tags = Array.isArray(group?.tags) && group.tags.length ? group.tags : [group?.tag];
      return tags.filter(Boolean);
    }

    function tagGroupsForType(type) {
      return tagGroups.filter((group) => group.type === type).map((group) => group.name);
    }

    function renderTagGroupControls() {
      const filter = $("#tagManageGroupFilter");
      if (!filter) return;
      const options = ["分组：全部", ...tagGroups.map((group) => group.name)];
      if (!options.includes(tagManageGroupFilter)) tagManageGroupFilter = "分组：全部";
      filter.innerHTML = options.map((group) => `<option>${escapeHtml(group)}</option>`).join("");
      filter.value = tagManageGroupFilter;
    }

    function renderTagEditorGroupOptions(type, selectedGroup = "") {
      const select = $("#tagGroupInput");
      if (!select) return;
      const options = tagGroupsForType(type);
      const value = options.includes(selectedGroup) ? selectedGroup : options[0] || "";
      select.innerHTML = options.length
        ? options.map((group) => `<option>${escapeHtml(group)}</option>`).join("")
        : `<option value="">请先新建${escapeHtml(type)}分组</option>`;
      select.value = value;
    }

    function ensureManagedTag(name, type = "客户标签", group = "需求阶段") {
      const exists = tagCatalog.find((tag) => tag.name === name && tag.type === type && tag.group === group);
      if (exists) return exists;
      const tag = {
        id: `tag_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        name,
        type,
        group,
        status: "启用",
        updated: "刚刚"
      };
      tagCatalog.unshift(tag);
      return tag;
    }

    function renderCustomerTagFilter() {
      const input = $("#tagFilter");
      const label = $("#tagFilterLabel");
      const menu = $("#tagFilterMenu");
      if (!input || !label || !menu) return;
      const current = input.value || "全部标签";
      const options = ["全部标签", ...activeCustomerTags()];
      input.value = options.includes(current) ? current : "全部标签";
      label.textContent = input.value;
      menu.innerHTML = options.map((tag) => `
        <button class="custom-option ${tag === input.value ? "active" : ""}" type="button" data-tag-filter-option="${tag}">${tag}</button>
      `).join("");
    }

    function setCustomerTagFilter(value = "全部标签", rerender = true) {
      $("#tagFilter").value = value;
      renderCustomerTagFilter();
      if (rerender) {
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
      }
    }

    function renderTagChoices() {
      const list = $("#tagChoiceList");
      if (!list) return;
      const tags = tagMode === "group" ? activeGroupTags() : activeCustomerTags();
      list.innerHTML = tags.slice(0, 12).map((tag) => `
        <button class="choice ${tagSelection.has(tag) ? "active" : ""}" data-tag-choice="${tag}">${tag}</button>
      `).join("");
    }

    function renderTagManagement() {
      renderTagGroupControls();
      const keyword = ($("#tagManageSearch")?.value || "").trim();
      const rows = tagCatalog.filter((tag) => {
        const typeMatch = tagManageTypeFilter === "类型：全部" || tag.type === tagManageTypeFilter;
        const groupMatch = tagManageGroupFilter === "分组：全部" || tag.group === tagManageGroupFilter;
        const keywordMatch = !keyword || tag.name.includes(keyword) || tag.group.includes(keyword) || tag.type.includes(keyword);
        return typeMatch && groupMatch && keywordMatch;
      });
      $("#tagManageRows").innerHTML = rows.length ? rows.map((tag) => `
        <tr>
          <td><span class="chip ${chipClass(tag.name)}">${tag.name}</span></td>
          <td>${tag.type}</td>
          <td>${tag.group}</td>
          <td>${tagUsage(tag).toLocaleString()}${tag.type === "群标签" ? " 群" : " 人"}</td>
          <td><span class="chip ${tag.status === "停用" ? "neutral" : ""}">${tag.status}</span></td>
          <td>${tag.updated}</td>
          <td>
            <div class="tag-actions">
              <button class="btn small" data-edit-managed-tag="${tag.id}">编辑</button>
              ${tag.type === "客户标签" ? `<button class="btn small" data-apply-managed-tag="${tag.id}">应用</button>` : ""}
              <span class="more-actions">
                <button class="btn small ghost" data-toggle-tag-actions="${tag.id}">更多</button>
                <span class="more-actions-menu">
                  <button class="btn small" data-toggle-managed-tag="${tag.id}">${tag.status === "启用" ? "停用" : "启用"}</button>
                  <button class="btn small ghost" data-delete-managed-tag="${tag.id}">删除</button>
                </span>
              </span>
            </div>
          </td>
        </tr>
      `).join("") : `<tr><td colspan="7"><div class="empty"><strong>未找到标签</strong><span>请调整类型、分组或搜索条件。</span></div></td></tr>`;
      if ($("#tagManageTypeFilter")) $("#tagManageTypeFilter").value = tagManageTypeFilter;
      if ($("#tagTotalStat")) $("#tagTotalStat").textContent = tagCatalog.length;
      if ($("#tagUnusedStat")) $("#tagUnusedStat").textContent = tagCatalog.filter((tag) => tagUsage(tag) === 0).length;
      renderCustomerTagFilter();
      renderTagChoices();
    }

    function openTagEditor(tagId = null) {
      editingTagId = tagId;
      const tag = tagCatalog.find((item) => item.id === tagId);
      $("#tagEditorTitle").textContent = tag ? "编辑标签" : "新建标签";
      $("#tagNameInput").value = tag?.name || "";
      $("#tagTypeInput").value = tag?.type || "客户标签";
      renderTagEditorGroupOptions($("#tagTypeInput").value, tag?.group || "");
      $("#tagStatusInput").value = tag?.status || "启用";
      openModal("#tagEditorModal");
    }

    function openTagGroupEditor() {
      $("#tagGroupNameInput").value = "";
      $("#tagGroupTypeInput").value = "客户标签";
      openModal("#tagGroupEditorModal");
    }

    function saveTagGroup() {
      const name = $("#tagGroupNameInput").value.trim();
      const type = $("#tagGroupTypeInput").value;
      if (!name) { showToast("请输入分组名称"); return; }
      if (tagGroups.some((group) => group.name === name)) { showToast("已存在同名标签分组"); return; }
      tagGroups.push({ name, type });
      tagManageGroupFilter = name;
      closeModal("#tagGroupEditorModal");
      renderTagManagement();
      recordOperation("新建标签分组", name, `适用类型：${type}`);
      showToast(`已创建「${name}」分组，可继续新建标签`);
    }

    function saveManagedTag() {
      const name = $("#tagNameInput").value.trim();
      const type = $("#tagTypeInput").value;
      const group = $("#tagGroupInput").value;
      const status = $("#tagStatusInput").value;
      if (!name) {
        showToast("请输入标签名称");
        return;
      }
      if (!group) {
        showToast("请先新建或选择标签分组");
        return;
      }
      const duplicated = tagCatalog.some((tag) => tag.id !== editingTagId && tag.name === name && tag.type === type && tag.group === group);
      if (duplicated) {
        showToast("同类型同分组下已有同名标签");
        return;
      }
      if (editingTagId) {
        const tag = tagCatalog.find((item) => item.id === editingTagId);
        if (tag) {
          const oldName = tag.name;
          Object.assign(tag, { name, type, group, status, updated: "刚刚" });
          customers.forEach((customer) => {
            customer.tags = customer.tags.map((item) => item === oldName ? name : item);
          });
          groups.forEach((groupItem) => {
            if (groupItem.tag === oldName) groupItem.tag = name;
          });
        }
      } else {
        tagCatalog.unshift({ id: `tag_${Date.now()}`, name, type, group, status, updated: "刚刚" });
      }
      closeModal("#tagEditorModal");
      renderTagManagement();
      renderCustomers(selectedCustomerIndex);
      renderGroups();
      showToast(`标签「${name}」已保存`);
    }

    function renderStores(filter = "全部项目") {
      const rows = stores.map((item) => `
        <tr>
          <td>
            <div class="store-name-with-icon">
              <span class="store-icon"><iconify-icon icon="icon-park-outline:hospital-three"></iconify-icon></span>
              <div><div class="store-name">${item.name}</div><div class="table-meta">${item.meta}</div></div>
            </div>
          </td>
          <td>${item.leads}</td>
          <td>${item.groups}</td>
          <td>${item.consult}</td>
          <td><div class="rate"><span>${item.rate}%</span><span class="bar"><i style="width:${item.rate * 1.8}%"></i></span></div></td>
          <td><span class="chip rose">${item.repurchase} 人</span></td>
          <td>${item.risk ? `<span class="chip amber">${item.risk} 项</span>` : `<span class="chip">正常</span>`}</td>
        </tr>
      `).join("");
      $("#storeRows").innerHTML = rows;
      if ($("#storeDataRows")) $("#storeDataRows").innerHTML = rows;
      $("#tableHint").textContent = filter === "全部项目" ? "展示全部医美客户的经营表现" : `已按「${filter}」筛选门店表现`;
    }

    function renderAttributionBoard() {
      const host = $("#attributionBoard");
      if (!host) return;
      host.innerHTML = attributionLeaders.map((item) => `
        <article class="attribution-card"><div class="attribution-card-head"><span class="chip">${item.scope}</span><strong>${item.name}</strong></div><div class="attribution-metrics"><span><b>${item.leads}</b>线索</span><span><b>${item.appointments}</b>预约</span><span><b>${item.repurchase}</b>复购</span></div><p>${item.insight}</p><button class="btn small" data-attribution-action="${item.action}">${item.action}</button></article>
      `).join("");
    }

    function renderTodos() {
      const priority = ["P0 紧急", "P1 重要", "P2 一般", "P3 一般"];
      const source = dashboardTodoView === "done" ? completedTodos : todos;
      if (!source.length) {
        $("#todoList").innerHTML = `<div class="empty"><strong>${dashboardTodoView === "done" ? "暂无已完成待办" : "当前没有待处理事项"}</strong>${dashboardTodoView === "done" ? "完成待办后会在这里保留处理记录。" : "新的风险、审批和跟进事项会自动进入列表。"}</div>`;
        return;
      }
      $("#todoList").innerHTML = source.slice(0, 4).map((todo, index) => `
        <div class="todo ${todo.overdue ? "overdue" : ""}">
          <div class="todo-top">
            <span class="chip ${index === 0 ? "red" : index === 1 ? "amber" : ""}">${priority[index] || "P3 一般"}</span>
            <span class="chip ${chipClass(todo.tag)}">${todo.tag}</span>
          </div>
          <span class="todo-title">${todo.title}</span>
          <p>${todo.desc}</p>
          <div class="todo-actions">
            <span class="table-meta">${dashboardTodoView === "done" ? `完成于：${todo.completedAt}` : "负责人：当前用户"}</span>
            ${dashboardTodoView === "done" ? `<button class="btn small" data-dashboard-view="todo">返回待处理</button>` : `<button class="btn small" data-finish-todo="${index}">${todo.type}</button>`}
          </div>
        </div>
      `).join("");
    }

    function renderTodayOperations() {
      const host = $("#todayOpsQueue");
      if (!host) return;
      $("#todayOpsSummary").textContent = `${todayOperations.length} 项待处理`;
      host.innerHTML = todayOperations.map((item) => `
        <article class="today-op-item priority-${item.priority.toLowerCase()}">
          <div class="today-op-priority">${item.priority}</div>
          <div class="today-op-main"><strong>${item.title}</strong><span>${item.reason}</span><div class="today-op-meta"><span><b>风险</b>${item.risk}</span><span><b>预计效果</b>${item.impact}</span></div></div>
          <button class="btn small ${item.priority === "P0" ? "primary" : ""}" data-run-today-operation="${item.id}">${item.action}</button>
        </article>
      `).join("");
    }

    function openMedicalSop(id) {
      const sop = medicalSopTemplates.find((item) => item.id === id);
      if (!sop) return;
      resetBroadcastWizard();
      const values = {
        "post-op": { title: "术后关怀第 3 天提醒", content: "您好，今天是术后第 3 天，想确认您的恢复情况。轻微泛红或紧绷通常会逐步缓解；如有持续疼痛、明显肿胀或其他不适，请直接回复“人工协助”，我们会优先安排顾问与医生助理跟进。", time: "2026-07-15T10:30" },
        hydration: { title: "水光 30 天复购权益提醒", content: "您好，距离上次水光护理已接近一个月。现在可为您保留老客护理权益，并安排一次皮肤状态复测；如需预约，我可以为您确认就近门店档期。", time: "2026-07-15T16:30" },
        intent: { title: "高意向面诊预约确认", content: "您好，上次咨询的项目已为您保留面诊建议。您可以回复方便的时间段，我将协助确认门店、顾问与到店说明。", time: "2026-07-15T14:00" },
        dormant: { title: "沉默会员皮肤检测邀约", content: "您好，我们为老会员准备了本月皮肤状态检测与护理建议。回复“检测”即可领取适用门店与预约说明。", time: "2026-07-15T18:00" }
      }[id];
      $("#broadcastTitleInput").value = values.title;
      $("#broadcastContentInput").value = values.content;
      $("#broadcastTagInput").value = sop.tag;
      $("#broadcastTimeInput").value = values.time;
      renderBroadcastWizard();
      openModal("#wizardModal");
      updateAssistantOutput(`已套用 SOP：${sop.title}`, `已预填目标人群、内容与发送时段。${sop.risk}，提交前仍可调整并由人工确认。`, [sop.tag, "SOP 模板"], { reason: sop.summary, risk: sop.risk, effect: sop.effect });
      showToast(`已套用「${sop.title}」SOP 草稿`);
    }

    function renderMedicalSopTemplates() {
      const host = $("#sopTemplateList");
      if (!host) return;
      host.innerHTML = medicalSopTemplates.map((sop) => `
        <article class="sop-template-card"><div class="sop-template-icon"><iconify-icon icon="${sop.icon}"></iconify-icon></div><div><strong>${sop.title}</strong><span>${sop.summary}</span><div class="tag-wrap"><span class="chip">${sop.tag}</span><span class="chip amber">${sop.risk}</span></div></div><div class="sop-template-foot"><span>预计：${sop.effect}</span><button class="btn small" data-open-medical-sop="${sop.id}">套用模板</button></div></article>
      `).join("");
    }

    function renderGrowthGovernance() {
      const approvalHost = $("#approvalQueue");
      const experimentHost = $("#experimentReview");
      const roiHost = $("#roiReview");
      if (!approvalHost || !experimentHost || !roiHost) return;
      const pending = broadcasts.filter((item) => item.status === "审批中" && !item.archived);
      approvalHost.innerHTML = `<div class="governance-section"><div class="governance-title-row"><strong>审批中任务</strong><button class="btn small" data-open-approval-policy>配置规则</button></div><div class="governance-policy">${approvalPolicy.scope} · ${approvalPolicy.rule}<br>${approvalPolicy.approvers} · SLA ${approvalPolicy.sla}</div>${pending.length ? pending.map((item) => `<div class="governance-row"><div><b>${item.title}</b><span>${item.targetType} · ${item.target} 个目标 · 提交人 ${item.creator}</span></div><div class="actions"><button class="btn small primary" data-open-approval="${item.id}">处理审批</button></div></div>`).join("") : `<div class="empty"><strong>无审批中任务</strong><span>草稿通过前置风控后会进入此处。</span></div>`}</div>`;
      experimentHost.innerHTML = `<div class="governance-section"><strong>实验对照</strong>${growthExperiments.map((item) => `<div class="experiment-row"><b>${item.name}</b><span>${item.channel} · ${item.audience} · ${item.sample}</span><div><em>A ${item.control}</em><em>B ${item.variant}</em><strong>${item.lift}</strong></div><span>${item.confidence}</span><small>${item.guardrail}</small><span class="chip ${item.status === "进行中" ? "amber" : ""}">${item.status}</span></div>`).join("")}</div>`;
      roiHost.innerHTML = `<div class="governance-section"><strong>渠道利润 ROI</strong>${roiReviews.map((item) => `<div class="roi-row"><div><b>${item.channel}</b><span>投放 ${item.spend} · ${item.leads} 线索 / ${item.appointments} 预约</span></div><div><strong>利润 ROI ${item.profitRoi}</strong><span>贡献利润 ${item.profit}</span></div><p>营收 ${item.revenue} · ${item.attribution} · 已扣除投放、优惠、履约与退款口径<br>${item.insight}</p></div>`).join("")}</div>`;
    }

    function renderLifecycleGovernance() {
      const integrationHost = $("#integrationHealth");
      const frequencyHost = $("#frequencyGuardrails");
      if (!integrationHost || !frequencyHost) return;
      integrationHost.innerHTML = `<div class="governance-section"><strong>外部事件接入</strong>${integrationAdapters.map((item) => `<div class="integration-row"><div><b>${item.name}</b><span>${item.events}</span><small>${item.note}</small></div><span class="chip ${item.status.includes("待") ? "amber" : ""}">${item.status}</span></div>`).join("")}</div>`;
      frequencyHost.innerHTML = `<div class="governance-section"><strong>触达护栏</strong><div class="guardrail-row"><b>频控</b><span>同一客户 7 天最多 3 次主动触达</span></div><div class="guardrail-row"><b>免打扰</b><span>21:00–09:00 不自动发送，客户可单独暂停</span></div><div class="guardrail-row"><b>授权</b><span>无营销授权或退订客户自动排除并留存审计记录</span></div></div>`;
    }

    function todoPriority(todo, index) {
      if (todo.overdue) return { label: "P0 紧急", className: "red" };
      if (todo.dueSoon || index === 1) return { label: "P1 重要", className: "amber" };
      return { label: index < 4 ? "P2 一般" : "P3 一般", className: "" };
    }

    function todoPageItems() {
      if (todoPageFilter === "done") return completedTodos.map((todo, index) => ({ todo, index, completed: true }));
      const pending = todos.map((todo, index) => ({ todo, index, completed: false }));
      return todoPageFilter === "due" ? pending.filter(({ todo }) => todo.dueSoon || todo.overdue) : pending;
    }

    function renderTodoPage() {
      const items = todoPageItems();
      $("#todoPendingCount").textContent = todos.length;
      $("#todoDueCount").textContent = todos.filter((todo) => todo.dueSoon || todo.overdue).length;
      $("#todoDoneCount").textContent = completedTodos.length;
      $$('[data-todo-page-filter]').forEach((button) => button.classList.toggle("active", button.dataset.todoPageFilter === todoPageFilter));

      const labels = { pending: "待处理", due: "即将到期", done: "已完成" };
      const description = todoPageFilter === "due"
        ? "以下事项将在近期到期，请优先完成。"
        : todoPageFilter === "done"
          ? "已完成事项会保留处理时间与结果记录。"
          : "当前待办按风险等级和业务时限排序。";
      $("#todoPageSummary").innerHTML = `<strong>${labels[todoPageFilter]} ${items.length} 项</strong><span>${description}</span>`;

      if (!items.length) {
        $("#todoPageList").innerHTML = `<div class="todo-page-empty">暂无${labels[todoPageFilter]}事项</div>`;
        return;
      }

      $("#todoPageList").innerHTML = items.map(({ todo, index, completed }) => {
        const priority = todoPriority(todo, index);
        return `<article class="todo-page-row ${todo.overdue ? "is-overdue" : ""}">
          <span class="chip ${priority.className} todo-page-priority">${priority.label}</span>
          <div class="todo-page-main">
            <strong>${todo.title}</strong>
            <p>${todo.desc}</p>
          </div>
          <div class="todo-page-meta">
            <span class="chip ${chipClass(todo.tag)}">${todo.tag}</span>
            <span class="table-meta">${completed ? `完成于 ${todo.completedAt}` : todo.overdue ? "已逾期" : "负责人：当前用户"}</span>
            ${completed ? `<span class="chip">已完成</span>` : `<button class="btn small" data-finish-todo="${index}">${todo.type}</button>`}
          </div>
        </article>`;
      }).join("");
    }

    function openTodoPage(filter = "pending") {
      todoPageFilter = filter;
      $$(".screen").forEach((node) => node.classList.remove("active"));
      $("#screen-todos").classList.add("active");
      renderTodoPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function closeTodoPage() {
      activateScreen("dashboard");
      window.scrollTo({ top: 0, behavior: "auto" });
      requestAnimationFrame(drawTrendChart);
    }

    function completeTodoByRoute(route, result) {
      const index = todos.findIndex((todo) => todo.route === route);
      if (index < 0) return false;
      const [todo] = todos.splice(index, 1);
      completedTodos.unshift({
        ...todo,
        overdue: false,
        completedAt: nowLabel(),
        result
      });
      renderTodos();
      renderTodoPage();
      markOperationFeedback("#todoPageList .todo-page-row:first-child, #todoList .todo:first-child");
      recordOperation("完成待办", todo.title, result);
      return true;
    }

    function filteredCustomers() {
      const keyword = ($("#customerSearch")?.value || "").trim();
      const tagFilter = $("#tagFilter")?.value || "全部标签";
      return customers.map((item, index) => ({ ...item, index })).filter((item) => {
        const segmentMatch = customerFilter === "全部潜客"
          || (customerFilter === "高意向" && item.tags.some((tag) => tag.includes("高意向") || tag.includes("抗衰")))
          || (customerFilter === "待回访" && item.status.includes("待回访"));
        const tagMatch = tagFilter === "全部标签" || item.tags.includes(tagFilter);
        const blacklistMatch = !blacklist.some((blocked) => blocked.customer === item.name);
        const keywordMatch = !keyword || item.name.includes(keyword) || item.phone.includes(keyword) || item.time.includes(keyword) || item.tags.join("").includes(keyword);
        return segmentMatch && tagMatch && blacklistMatch && keywordMatch;
      });
    }

    function pagedCustomers(rows) {
      const totalPages = Math.max(1, Math.ceil(rows.length / customerPageSize));
      customerPage = Math.min(Math.max(customerPage, 1), totalPages);
      const start = (customerPage - 1) * customerPageSize;
      return {
        rows: rows.slice(start, start + customerPageSize),
        totalPages,
        start
      };
    }

    function resetCustomerPage() {
      customerPage = 1;
    }

    function updateCustomerPager(totalRows, pageRows, totalPages, start) {
      const pageText = $("#customerPageText");
      if (!pageText) return;
      const from = totalRows ? start + 1 : 0;
      const to = totalRows ? start + pageRows.length : 0;
      pageText.textContent = `第 ${customerPage} / ${totalPages} 页 · ${from}-${to} / ${totalRows} 位潜客`;
      $("#customerPrevPage").disabled = customerPage <= 1;
      $("#customerNextPage").disabled = customerPage >= totalPages;
    }

    function customerTagSummary(tags, limit = 2) {
      const safeTags = Array.isArray(tags) ? tags : [];
      const visible = safeTags.slice(0, limit);
      const hiddenCount = Math.max(0, safeTags.length - visible.length);
      const title = safeTags.join("、");
      return `
        <div class="customer-tag-list" title="${title}">
          ${visible.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}
          ${hiddenCount ? `<span class="chip more-count">+${hiddenCount}</span>` : ""}
        </div>
      `;
    }

    function renderCustomers(activeIndex = selectedCustomerIndex) {
      const allRows = filteredCustomers();
      const pageState = pagedCustomers(allRows);
      const rows = pageState.rows;
      const visibleActiveIndex = rows.some((item) => item.index === activeIndex)
        ? activeIndex
        : (rows[0]?.index ?? activeIndex);
      $("#customerRows").innerHTML = rows.length ? rows.map((item) => `
        <tr data-customer="${item.index}" class="${item.index === visibleActiveIndex ? "customer-selected" : ""}">
          <td><input type="checkbox" class="rowCheck" data-check-index="${item.index}" ${checkedCustomerIndexes.has(item.index) ? "checked" : ""}></td>
          <td><div class="customer-name-cell"><strong>${item.name}</strong><div class="table-meta">${item.phone}</div></div></td>
          <td><div class="customer-tags-cell">${customerTagSummary(item.tags)}</div></td>
          <td>${item.owner}</td>
          <td>${item.time}</td>
          <td><span class="chip ${chipClass(item.status)}">${item.status}</span></td>
        </tr>
      `).join("") : `<tr><td colspan="6"><div class="empty"><strong>未找到匹配潜客</strong><span>请调整客户分组、标签或搜索条件。</span></div></td></tr>`;
      const visibleIndexes = rows.map((item) => item.index);
      $("#selectAll").checked = visibleIndexes.length > 0 && visibleIndexes.every((index) => checkedCustomerIndexes.has(index));
      updateCustomerPager(allRows.length, rows, pageState.totalPages, pageState.start);
      selectedCustomerIndex = visibleActiveIndex;
      updateBatchbar();
      $$("[data-customer-filter]").forEach((button) => button.classList.toggle("active", button.dataset.customerFilter === customerFilter));
      refreshAssistantMini();
    }

    function customerStage(item) {
      if (item.status === "已预约") return "已转化";
      if (item.tags.some((tag) => tag.includes("老客") || tag.includes("复购"))) return "老客";
      return "潜客";
    }

    function customerSource(index) {
      return ["企微渠道活码", "公众号扫码", "门店顾问录入", "社群活动海报"][index % 4];
    }

    function customerOneId(index) {
      return `WM-${String(index + 10001).padStart(6, "0")}`;
    }

    function customerIdentitySources(index) {
      const conflict = index % 5 === 0 && !customers[index]?.identityResolved;
      return { conflict, sources: [
        { name: "企业微信", key: `wxid_${String(index + 27).padStart(4, "0")}`, match: "手机号", confidence: "98%" },
        { name: "预约系统", key: `APT-${String(index + 310).padStart(5, "0")}`, match: conflict ? "姓名 + 手机后四位" : "手机号 + 姓名", confidence: conflict ? "76%" : "96%" },
        { name: "活动触点", key: `CAMP-QX-${index + 1}`, match: "手机号", confidence: "94%" }
      ] };
    }

    function customerFrequencyProfile(index) {
      const item = customers[index] || {};
      return { sent: (index % 3) + 1, cap: 3, paused: Boolean(item.contactPaused), consent: index % 6 === 0 ? "待复核" : "已授权" };
    }

    function customerTimeline(item) {
      const followups = (item.followups || []).map((follow) => ({
        date: follow.time.slice(5, 10),
        title: follow.type,
        note: follow.note
      }));
      return [
        ...followups,
        { date: "07-10", title: `咨询${item.tags[0]}项目`, note: "询问恢复期与适合肤质，建议 24 小时内二次跟进。" },
        { date: "07-09", title: "领取皮肤检测报告", note: "系统已结合互动行为更新客户意向与跟进建议。" },
        { date: "07-05", title: "进入悦颜轻医美社群", note: "来源：七夕焕肤活动海报。" }
      ].slice(0, 6);
    }

    function renderCustomerDetail(index = selectedCustomerIndex) {
      selectedCustomerIndex = index;
      const item = customers[index] || customers[0];
      const timeline = customerTimeline(item);
      const identity = customerIdentitySources(index);
      const frequency = customerFrequencyProfile(index);
      $("#customerDetailSelectedLabel").textContent = `当前选中${customerStage(item)}`;
      $("#customerDetailBody").innerHTML = `
        <section class="customer-detail-hero">
          <div class="customer-detail-avatar">${item.name.slice(0, 1)}</div>
          <div class="customer-detail-identity">
            <div class="customer-detail-name-row">
              <h3>${item.name}</h3>
              <span class="chip ${chipClass(item.status)}">${item.status}</span>
            </div>
            <div class="customer-detail-sub">${item.phone} &nbsp;|&nbsp; 归属：${item.owner}</div>
            <div class="customer-one-id"><span>OneID</span><strong>${customerOneId(index)}</strong><span>${identity.conflict ? "存在低置信度待确认来源" : "已合并企微、门店与活动触点"}</span></div>
            <button class="customer-detail-remark" type="button" data-edit-customer-note>
              ${item.note ? escapeHtml(item.note) : "添加备注，记录客户关键信息…"}
              <iconify-icon icon="icon-park-outline:edit"></iconify-icon>
            </button>
          </div>
        </section>

        <section class="customer-identity-governance">
          <div class="customer-governance-head"><div><h4>身份与触达治理</h4><span>${identity.conflict ? "需人工确认后才会用于归因与自动触达" : "身份来源已校验，可追溯至原始事件"}</span></div>${identity.conflict ? `<button class="btn small primary" data-resolve-oneid="${index}">确认合并</button>` : `<span class="chip">身份已确认</span>`}</div>
          <div class="identity-source-list">${identity.sources.map((source) => `<div><b>${source.name}</b><span>${source.key} · ${source.match}</span><em class="${Number(source.confidence.replace("%", "")) < 80 ? "risk" : ""}">${source.confidence}</em></div>`).join("")}</div>
          <div class="contact-guardrail"><div><b>本周主动触达 ${frequency.sent} / ${frequency.cap}</b><span>${frequency.consent} · 免打扰 21:00–09:00</span></div><button class="btn small" data-toggle-contact-guard="${index}">${frequency.paused ? "恢复自动触达" : "暂停自动触达"}</button></div>
        </section>

        <section class="customer-detail-overview">
          <div class="customer-detail-metrics">
            <div class="customer-detail-metric"><span><iconify-icon icon="icon-park-outline:send-one"></iconify-icon>来源</span><strong>${customerSource(index)}</strong></div>
            <div class="customer-detail-metric"><span><iconify-icon icon="icon-park-outline:like"></iconify-icon>需求</span><strong>${item.tags[0]}</strong></div>
            <div class="customer-detail-metric"><span><iconify-icon icon="icon-park-outline:calendar"></iconify-icon>最近互动</span><strong>${item.time}</strong></div>
            <div class="customer-detail-metric"><span><iconify-icon icon="icon-park-outline:flag"></iconify-icon>客户阶段 / 状态</span><strong>${customerStage(item)}</strong></div>
          </div>
          <div class="customer-detail-tags"><span>标签</span><div class="tag-wrap">${item.tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div></div>
        </section>

        <section class="customer-service-plan">
          <div><span>服务旅程</span><strong>${item.tags.some((tag) => tag.includes("术后")) ? "术后恢复与复查" : item.tags.some((tag) => tag.includes("复购") || tag.includes("老客")) ? "护理周期与复购" : "咨询到面诊转化"}</strong></div>
          <div><span>当前服务节点</span><strong>${["待预约", "预约已确认", "已治疗", "术后关怀", "复查已安排"][item.serviceStage || 0]}</strong></div>
          <button class="btn small primary" data-advance-service-stage="${index}">推进至下一节点</button>
        </section>

        <section>
          <h4 class="customer-detail-section-title">快捷操作</h4>
          <div class="customer-detail-actions">
            <button class="btn primary" data-customer-detail-action="broadcast"><iconify-icon icon="icon-park-outline:volume-notice"></iconify-icon>发起群发</button>
            <button class="btn" data-customer-detail-action="conversation"><iconify-icon icon="icon-park-outline:message"></iconify-icon>查看/回复会话</button>
            <button class="btn" data-customer-detail-action="tags"><iconify-icon icon="icon-park-outline:tag-one"></iconify-icon>打标签</button>
            <button class="btn" data-customer-detail-action="follow"><iconify-icon icon="icon-park-outline:add-user"></iconify-icon>添加跟进</button>
          </div>
        </section>

        <section class="customer-detail-history">
          <h4 class="customer-detail-section-title">客户服务时间轴</h4>
          <div class="customer-detail-timeline">
            ${timeline.map((entry) => `
              <div class="customer-detail-timeline-item">
                <span class="customer-detail-timeline-date">${entry.date}</span>
                <span class="customer-detail-timeline-axis"></span>
                <div class="customer-detail-timeline-card"><strong>${entry.title}</strong>${entry.note}</div>
              </div>
            `).join("")}
          </div>
        </section>
      `;
    }

    function openCustomerDetail(index) {
      renderCustomers(index);
      renderCustomerDetail(index);
      openModal("#customerDetailModal");
    }

    function groupAvatarClass(group) {
      if (!group) return "";
      if (group.tag.includes("复购") || group.meta.includes("复购")) return "rebuy";
      if (group.tag.includes("咨询") || group.meta.includes("咨询")) return "consult";
      return "";
    }

    function groupTypeLabel(group) {
      if (!group) return "外部客户群";
      if (group.meta.includes("复购")) return "老客复购";
      if (group.meta.includes("咨询")) return "项目咨询";
      return group.meta || "外部客户群";
    }

    function renderGroups() {
      const keyword = ($("#groupSearchInput")?.value || "").trim();
      const tag = $("#groupTagFilter")?.value || "标签：全部";
      const filtered = groups.filter((group) => {
        const keywordMatch = !keyword || group.name.includes(keyword) || group.owner.includes(keyword) || group.meta.includes(keyword);
        const tagMatch = tag === "标签：全部" || groupTagNames(group).includes(tag);
        return keywordMatch && tagMatch;
      });
      if (filtered.length && !filtered.some((group) => group.id === selectedGroupId)) selectedGroupId = filtered[0].id;
      const totalPages = Math.max(1, Math.ceil(filtered.length / groupPageSize));
      groupPage = Math.min(Math.max(groupPage, 1), totalPages);
      const start = (groupPage - 1) * groupPageSize;
      const pageRows = filtered.slice(start, start + groupPageSize);
      $("#groupRows").innerHTML = pageRows.length ? pageRows.map((group) => `
        <tr data-group-row="${group.id}" class="${group.id === selectedGroupId ? "group-selected" : ""}">
          <td>
            <div class="group-cell">
              <span class="group-avatar ${groupAvatarClass(group)}"><iconify-icon icon="icon-park-outline:peoples"></iconify-icon></span>
              <div class="group-name-cell">
                <strong class="group-name">${group.name}</strong>
                <div class="table-meta">${groupTypeLabel(group)}</div>
              </div>
            </div>
          </td>
          <td>${group.members}</td>
          <td>${group.owner}</td>
          <td><span class="chip ${chipClass(group.tag)}">${group.tag}</span></td>
          <td>${group.active}</td>
          <td><div class="group-action-cell"><button class="btn small ghost" data-group-detail="${group.id}">查看详情</button><button class="btn small" data-open-thread="${group.id}"><iconify-icon icon="icon-park-outline:message"></iconify-icon>进群回复</button></div></td>
        </tr>
      `).join("") : `<tr><td colspan="6"><div class="empty"><strong>未找到群聊</strong><span>请调整群名称或群标签筛选。</span></div></td></tr>`;
      const from = filtered.length ? start + 1 : 0;
      const to = filtered.length ? start + pageRows.length : 0;
      if ($("#groupCountText")) $("#groupCountText").textContent = `共 ${filtered.length} 个群聊`;
      if ($("#groupPageText")) $("#groupPageText").textContent = `第 ${groupPage} / ${totalPages} 页 · ${from}-${to} / ${filtered.length} 个群聊`;
      if ($("#groupPrevPage")) $("#groupPrevPage").disabled = groupPage <= 1;
      if ($("#groupNextPage")) $("#groupNextPage").disabled = groupPage >= totalPages;
      if ($("#selectAllGroups")) $("#selectAllGroups").checked = pageRows.length > 0 && pageRows.every((group) => checkedGroupIds.has(group.id));
      updateGroupBatchbar();
      refreshAssistantMini();
    }

    function updateGroupBatchbar() {
      const bar = $("#groupBatchbar");
      if (!bar) return;
      bar.classList.toggle("show", checkedGroupIds.size > 0);
      bar.querySelector("span").textContent = `已选 ${checkedGroupIds.size} 个客户群`;
    }

    function openGroupDetail(groupId) {
      const group = groups.find((item) => item.id === groupId) || groups[0];
      if (!group) return;
      const isRepurchase = groupTypeLabel(group) === "老客复购";
      const isConsultation = groupTypeLabel(group) === "项目咨询";
      const engagement = Math.min(96, 68 + (group.members % 25));
      const weeklyInteractions = Math.round(group.members * (isConsultation ? .52 : .38));
      const highIntent = Math.max(8, Math.round(group.members * (isConsultation ? .28 : .18)));
      const pendingFollowUps = Math.max(3, Math.round(highIntent * .22));
      const memberMix = isRepurchase
        ? [{ label: "近期待复购", value: 46, tone: "teal" }, { label: "已到店老客", value: 32, tone: "mint" }, { label: "待激活", value: 22, tone: "amber" }]
        : isConsultation
          ? [{ label: "高意向咨询", value: 38, tone: "teal" }, { label: "项目了解中", value: 41, tone: "mint" }, { label: "待跟进", value: 21, tone: "amber" }]
          : [{ label: "活跃会员", value: 44, tone: "teal" }, { label: "权益待领取", value: 35, tone: "mint" }, { label: "低活跃成员", value: 21, tone: "amber" }];
      const nextAction = isRepurchase ? "发送本周复购档期与权益提醒" : isConsultation ? "补发项目恢复期答疑素材" : "同步本周福利与预约入口";
      selectedGroupId = group.id;
      $("#groupDetailTitle").textContent = group.name;
      $("#groupDetailStatus").textContent = "活跃";
      $("#groupDetailBody").innerHTML = `
        <section class="group-detail-hero">
          <div class="group-detail-identity">
            <span class="group-avatar ${groupAvatarClass(group)}"><iconify-icon icon="icon-park-outline:peoples"></iconify-icon></span>
            <div class="group-detail-title"><div class="tag-wrap">${groupTagNames(group).map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}<span class="chip neutral">${groupTypeLabel(group)}</span></div><h3>${group.name}</h3><p>${group.store || "已同步外部客户群"} · 群主 ${group.owner} · 创建于 ${group.created || "2026-03-15"}</p></div>
          </div>
          <div class="group-engagement" style="--engagement:${engagement}%" aria-label="群活跃指数 ${engagement}"><div><strong>${engagement}</strong><span>活跃指数</span></div></div>
        </section>
        <section class="group-detail-metrics" aria-label="群组核心指标">
          <div><span class="group-detail-metric-icon"><iconify-icon icon="icon-park-outline:every-user"></iconify-icon></span><span>群成员</span><strong>${group.members}<small>人</small></strong></div>
          <div><span class="group-detail-metric-icon"><iconify-icon icon="icon-park-outline:message"></iconify-icon></span><span>本周互动</span><strong>${weeklyInteractions}<small>次</small></strong></div>
          <div><span class="group-detail-metric-icon"><iconify-icon icon="icon-park-outline:star"></iconify-icon></span><span>高意向成员</span><strong>${highIntent}<small>人</small></strong></div>
          <div><span class="group-detail-metric-icon"><iconify-icon icon="icon-park-outline:alarm"></iconify-icon></span><span>待跟进</span><strong>${pendingFollowUps}<small>人</small></strong></div>
        </section>
        <div class="group-detail-layout">
          <section class="group-detail-section group-member-mix"><div class="group-detail-section-head"><div><strong>群成员画像</strong><span>用于判断本轮触达重点</span></div><span class="chip neutral">${groupTypeLabel(group)}</span></div><div class="group-member-bars">${memberMix.map((item) => `<div class="group-member-bar"><div><span>${item.label}</span><strong>${item.value}%</strong></div><i class="${item.tone}" style="--member-ratio:${item.value}%"></i></div>`).join("")}</div><p class="group-insight"><iconify-icon icon="icon-park-outline:attention"></iconify-icon>${highIntent} 位成员处于高意向阶段，建议优先承接到顾问或预约入口。</p></section>
          <section class="group-detail-section group-operations"><div class="group-detail-section-head"><div><strong>运营节奏</strong><span>把群状态转成下一步动作</span></div></div><ol class="group-activity-timeline"><li class="done"><span><iconify-icon icon="icon-park-outline:check-one"></iconify-icon></span><div><strong>群基础信息已同步</strong><small>群主 ${group.owner} · ${group.members} 位成员</small></div></li><li class="done"><span><iconify-icon icon="icon-park-outline:message"></iconify-icon></span><div><strong>最近互动：${group.active}</strong><small>本周累计 ${weeklyInteractions} 次互动</small></div></li><li class="next"><span><iconify-icon icon="icon-park-outline:send-one"></iconify-icon></span><div><strong>建议下一步：${nextAction}</strong><small>发送前请复核人群范围与触达频次</small></div></li></ol></section>
        </div>
        <section class="group-notice-card"><span><iconify-icon icon="icon-park-outline:announcement"></iconify-icon></span><div><strong>群公告与运营口径</strong><p>${group.notice || "请按标准口径回复群内咨询，异常情况及时转交门店顾问。"}</p></div></section>
        <div class="group-detail-actions"><button class="btn primary" data-open-thread="${group.id}"><iconify-icon icon="icon-park-outline:comment"></iconify-icon>进群回复</button><button class="btn" data-open-wizard><iconify-icon icon="icon-park-outline:send-one"></iconify-icon>发起群发</button><button class="btn" data-open-tags data-edit-group-tags="${group.id}"><iconify-icon icon="icon-park-outline:tag-one"></iconify-icon>编辑标签</button></div>
      `;
      renderGroups();
      refreshAssistantMini();
      openModal("#groupDetailModal");
    }

    function renderBatchTasks() {
      $("#batchTaskRows").innerHTML = batchTasks.map((task) => `
        <div class="batch-task-card">
          <div class="batch-task-top">
            <div>
              <strong>${task.time}</strong>
              <div class="table-meta">执行员工：${task.owner || "自动分配"}</div>
            </div>
            <span class="chip ${task.status === "执行中" ? "amber" : ""}">${task.status}</span>
          </div>
          <div class="batch-task-stats">
            <div class="batch-task-stat"><span>总数</span><strong>${task.total}</strong></div>
            <div class="batch-task-stat"><span>成功</span><strong>${task.success}</strong></div>
            <div class="batch-task-stat"><span>失败</span><strong>${task.fail}</strong></div>
            <div class="batch-task-stat"><span>完成率</span><strong>${task.total ? Math.round((task.success / task.total) * 100) : 0}%</strong></div>
          </div>
        </div>
      `).join("");
    }

    function renderInviteTasks() {
      $("#inviteRows").innerHTML = inviteTasks.map((task) => `
        <tr>
          <td><strong>${task.title}</strong><div class="table-meta">目标群：${task.group}</div></td>
          <td>${task.target}</td>
          <td>${task.success}</td>
          <td>${task.fail}</td>
          <td><span class="chip ${task.status === "待执行" ? "amber" : ""}">${task.status}</span></td>
          <td>${task.time}</td>
        </tr>
      `).join("");
    }

    function scriptItemHas(item, key, value) {
      if (value === "全部") return true;
      const field = item[key];
      if (Array.isArray(field)) return field.includes(value) || field.includes("全项目");
      return field === value;
    }

    function filteredScriptPackages() {
      const keyword = ($("#scriptSearch")?.value || "").trim().toLowerCase();
      const result = scripts
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => {
          if (scriptResourceFilter === "最近使用" && item.uses < 1000) return false;
          if (scriptResourceFilter === "我的收藏" && !item.favorite) return false;
          if (scriptResourceFilter === "我创建的" && item.creator !== currentAccount().name) return false;
          if (["待审核", "待更新", "已停用"].includes(scriptResourceFilter) && item.status !== scriptResourceFilter) return false;
          if (scriptResourceFilter === "回收站") return false;
          if (scriptCollectionFilter !== "全部" && item.collection !== scriptCollectionFilter) return false;
          if (!scriptItemHas(item, "scope", scriptFilters.scope)) return false;
          if (!scriptItemHas(item, "scene", scriptFilters.scene)) return false;
          if (!scriptItemHas(item, "stage", scriptFilters.stage)) return false;
          if (!scriptItemHas(item, "channels", scriptFilters.channel)) return false;
          if (!scriptItemHas(item, "projects", scriptFilters.project)) return false;
          if (!scriptItemHas(item, "status", scriptFilters.status)) return false;
          if (scriptAdvancedFilters.creator !== "全部" && item.creator !== scriptAdvancedFilters.creator) return false;
          if (item.conversion < scriptAdvancedFilters.minConversion) return false;
          if (!keyword) return true;
          return [item.title, item.group, item.collection, item.creator, item.content, ...item.channels, ...item.projects]
            .join(" ")
            .toLowerCase()
            .includes(keyword);
        });
      if (scriptSortMode === "使用次数") result.sort((a, b) => b.item.uses - a.item.uses);
      if (scriptSortMode === "转化率") result.sort((a, b) => b.item.conversion - a.item.conversion);
      if (scriptSortMode === "最近更新") result.sort((a, b) => String(b.item.updated).localeCompare(String(a.item.updated)));
      return result;
    }

    function scriptStatusClass(status) {
      if (status === "待审核") return "pending";
      if (status === "待更新") return "update";
      if (status === "已停用") return "disabled";
      return "";
    }

    function renderScriptPackageCard(item, index) {
      const selected = selectedScriptIds.has(item.id);
      return `
        <article class="script-package-card ${selected ? "selected" : ""}" data-script-detail="${item.id}" data-micro-lift data-pointer-glow>
          <div class="script-package-head">
            <input type="checkbox" aria-label="选择${escapeHtml(item.title)}" data-script-select="${item.id}" ${selected ? "checked" : ""} />
            <div class="script-package-title">
              <button data-script-detail="${item.id}" title="查看${escapeHtml(item.title)}详情">${escapeHtml(item.title)}</button>
              <span class="script-owner-badge">${escapeHtml(item.ownerType)}</span>
            </div>
            <div class="script-card-tools">
              <button class="script-icon-button ${item.favorite ? "favorite" : ""}" data-script-favorite="${item.id}" title="${item.favorite ? "取消收藏" : "收藏"}"><iconify-icon icon="${item.favorite ? "icon-park-solid:star" : "icon-park-outline:star"}"></iconify-icon></button>
              <button class="script-icon-button" data-script-more="${item.id}" title="更多操作"><iconify-icon icon="lucide:ellipsis"></iconify-icon></button>
            </div>
          </div>
          <div class="script-package-meta"><span>${item.scriptCount} 条话术</span><span>${item.nodes} 个流程节点</span></div>
          <div class="script-package-applicable">适用：${escapeHtml(item.projects.join(" / "))}</div>
          <div class="script-package-channels">${item.channels.map((channel) => `<span>${escapeHtml(channel)}</span>`).join("")}</div>
          <div class="script-package-stats"><span>使用 <strong>${item.uses.toLocaleString()}</strong> 次</span><span>转化 <strong>${item.conversion.toFixed(1)}%</strong></span></div>
          <div class="script-package-foot"><span class="script-package-updated">更新于 ${item.updated}</span><span class="script-status ${scriptStatusClass(item.status)}">${item.status}</span></div>
        </article>
      `;
    }

    function renderScriptListView(visibleScripts) {
      return `
        <div class="script-list-rows">
          ${visibleScripts.map(({ item, index }) => `
            <article class="script-list-row" data-script-detail="${item.id}">
              <input class="asset-checkbox" type="checkbox" aria-label="选择${escapeHtml(item.title)}" data-script-select="${item.id}" ${selectedScriptIds.has(item.id) ? "checked" : ""} />
              <div class="script-list-row-title"><strong>${escapeHtml(item.title)}</strong><span class="table-meta">${item.scriptCount} 条话术 · ${item.nodes} 个流程节点 · ${escapeHtml(item.ownerType)}</span></div>
              <div class="script-list-row-meta">${escapeHtml(item.collection)}<br />${item.projects.slice(0, 2).map(escapeHtml).join(" / ")}</div>
              <div class="script-list-row-meta">使用 ${item.uses.toLocaleString()} 次<br />转化 ${item.conversion.toFixed(1)}%</div>
              <div class="script-list-row-actions"><span class="script-status ${scriptStatusClass(item.status)}">${item.status}</span><button class="btn small" data-use-script="${index}">调用</button></div>
            </article>
          `).join("")}
        </div>
      `;
    }

    function renderScriptFlowView(visibleScripts) {
      const nodeLabels = ["识别意图", "匹配话术", "人工确认", "发送触达", "记录结果", "生成跟进", "完成闭环"];
      return `<div class="script-flow-grid">${visibleScripts.map(({ item, index }) => `
        <article class="script-flow-item">
          <div class="script-flow-title"><strong>${escapeHtml(item.title)}</strong><span>${item.scriptCount} 条话术 · ${item.nodes} 个流程节点</span></div>
          <div class="script-flow-nodes">${nodeLabels.slice(0, Math.min(item.nodes, 5)).map((node, nodeIndex, nodes) => `<span class="script-flow-node">${node}</span>${nodeIndex < nodes.length - 1 ? `<iconify-icon class="script-flow-arrow" icon="lucide:chevron-right"></iconify-icon>` : ""}`).join("")}</div>
          <button class="btn small" data-use-script="${index}">调用话术包</button>
        </article>
      `).join("")}</div>`;
    }

    function scriptPackageEntries(item) {
      const names = ["首轮开场", "需求追问", "项目价值说明", "权益引导", "异议处理", "预约确认", "术后提醒", "复购触达", "沉默唤醒", "风险安抚", "转人工跟进", "发送后记录"];
      const content = [item.content, "想先了解您目前最关注的皮肤问题和可到店时间，我会结合情况安排合适的顾问沟通。", "这类方案会根据肤质、既往护理和预期效果做调整，建议先完成皮肤检测后再确认具体项目。", "本周到店可保留老客权益，并附赠一次皮肤检测；我可以先为您查询可预约档期。", "理解您需要再考虑，我先为您保留本周权益，确认后可随时帮您安排顾问沟通。", "已为您预留沟通时段，到店前如有皮肤不适或时间变动，请直接回复我调整。", "术后恢复期间请避免高温、暴晒和刺激性护肤；如有持续不适，我会立即同步门店顾问。", "根据上次护理节点，本周可安排复测并保留原方案权益，方便时我帮您确认档期。", "距离上次沟通已有一段时间，想了解您目前皮肤状态是否有变化，需要我补充方案说明吗？", "我理解您的担心，已同步门店顾问优先确认，将在约定时间内给您明确回复。", "为了更准确地协助您，我已转交专属顾问跟进，后续会同步处理结果。", "本次沟通已记录，后续将根据回复状态补充客户标签与跟进计划。"];
      return Array.from({ length: item.scriptCount }, function(_, index) {
        return { title: names[index] || "补充话术 " + (index + 1), content: content[index] || item.content };
      });
    }

    function canEditScript(item) {
      return item && item.creator === currentAccount().name && item.scope === "个人话术";
    }

    function openScriptPackageEditor(item) {
      if (!canEditScript(item)) {
        showToast("仅可编辑自己创建的个人话术包");
        return;
      }
      openWorkflow({
        title: "编辑话术包",
        confirmLabel: "保存修改",
        body: '<div class="form-grid two"><div class="form-row"><label for="scriptEditTitle">话术包名称</label><input class="field" id="scriptEditTitle" value="' + escapeHtml(item.title) + '"></div><div class="form-row"><label for="scriptEditCollection">所属集合</label><select class="field" id="scriptEditCollection"><option' + (item.collection === "水光复购" ? " selected" : "") + '>水光复购</option><option' + (item.collection === "术后关怀" ? " selected" : "") + '>术后关怀</option><option' + (item.collection === "新客咨询" ? " selected" : "") + '>新客咨询</option><option' + (item.collection === "客诉安抚" ? " selected" : "") + '>客诉安抚</option></select></div><div class="form-row"><label for="scriptEditProject">所属项目</label><select class="field" id="scriptEditProject"><option' + (item.projects[0] === "水光项目" ? " selected" : "") + '>水光项目</option><option' + (item.projects[0] === "光电抗衰" ? " selected" : "") + '>光电抗衰</option><option' + (item.projects[0] === "全项目" ? " selected" : "") + '>全项目</option></select></div><div class="form-row"><label for="scriptEditCount">话术数量</label><input class="field" id="scriptEditCount" type="number" min="1" max="30" value="' + item.scriptCount + '"></div></div><div class="form-row"><label for="scriptEditContent">首条话术</label><textarea class="field" id="scriptEditContent" rows="5">' + escapeHtml(item.content) + '</textarea></div><div class="workflow-summary"><strong>编辑权限</strong><span>这是你创建的个人话术包。保存后会更新详细话术列表，并保留待审核状态。</span></div>',
        onConfirm: () => {
          const title = $("#scriptEditTitle").value.trim();
          const content = $("#scriptEditContent").value.trim();
          if (!title || !content) { showToast("请填写名称和首条话术"); return false; }
          if (scripts.some((script) => script.id !== item.id && script.title === title)) { showToast("已有同名话术包"); return false; }
          item.title = title;
          item.collection = $("#scriptEditCollection").value;
          item.projects = [$("#scriptEditProject").value];
          item.scriptCount = Math.max(1, Math.min(30, Number($("#scriptEditCount").value) || 1));
          item.nodes = Math.max(1, Math.ceil(item.scriptCount / 3));
          item.content = content;
          item.updated = "刚刚";
          item.status = "待审核";
          scriptDetailId = item.id;
          renderSupplementModules();
          recordOperation("编辑话术包", item.title, "已更新内容并进入待审核");
          showToast("话术包已保存，等待审核后发布");
        }
      });
    }

    function renderScriptDetailPage(item) {
      const entries = scriptPackageEntries(item);
      const editControl = canEditScript(item) ? '<button class="btn" data-script-edit-package="' + item.id + '"><iconify-icon icon="lucide:pencil"></iconify-icon>编辑话术包</button>' : '<span class="table-meta">团队/企业话术仅可查看与调用</span>';
      const items = entries.map(function(entry, index) {
        return '<article class="script-detail-item"><div class="script-detail-item-head"><div><strong>' + (index + 1) + '. ' + escapeHtml(entry.title) + '</strong><div class="table-meta">' + escapeHtml(item.stage) + ' · ' + escapeHtml(item.channels[index % item.channels.length]) + '</div></div><span class="chip">' + (index + 1) + '/' + entries.length + '</span></div><p>' + escapeHtml(entry.content) + '</p><div class="script-detail-item-actions"><button class="btn small" data-script-template-use="' + index + '">调用到会话</button><button class="btn small ghost" data-script-template-copy="' + index + '"><iconify-icon icon="icon-park-outline:copy"></iconify-icon>复制</button></div></article>';
      }).join("");
      return '<div class="script-detail-page"><div class="script-detail-head"><div><button class="btn small ghost" data-script-detail-back><iconify-icon icon="icon-park-outline:left"></iconify-icon>返回话术库</button><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.collection) + ' · ' + escapeHtml(item.ownerType) + ' · ' + escapeHtml(item.status) + '</p></div><div class="script-detail-actions">' + editControl + '<button class="btn primary" data-script-template-use="0">调用首条话术</button></div></div><div class="script-detail-summary"><span>' + item.scriptCount + ' 条话术</span><span>' + item.nodes + ' 个流程节点</span><span>使用 ' + item.uses.toLocaleString() + ' 次</span><span>转化 ' + item.conversion.toFixed(1) + '%</span></div><div class="script-detail-layout"><section class="script-detail-items">' + items + '</section><aside class="script-detail-aside"><strong>使用说明</strong><span>按客户阶段选择对应话术；发送前需人工确认，发送后应补充跟进结果。</span><strong>适用范围</strong><span>' + escapeHtml(item.projects.join(" / ")) + '</span><strong>支持渠道</strong><span>' + escapeHtml(item.channels.join(" / ")) + '</span><strong>维护信息</strong><span>' + escapeHtml(item.creator) + ' · 更新于 ' + escapeHtml(item.updated) + '</span></aside></div></div>';
    }

    function renderScriptLibrary() {
      if (!$("#scriptContent")) return;
      const detailItem = scripts.find(function(item) { return item.id === scriptDetailId; });
      $(".script-library-main").classList.toggle("detail-mode", Boolean(detailItem));
      if (detailItem) {
        $("#scriptContent").innerHTML = renderScriptDetailPage(detailItem);
        return;
      }
      const visibleScripts = filteredScriptPackages();
      $$('[data-script-resource]').forEach((button) => button.classList.toggle("active", button.dataset.scriptResource === scriptResourceFilter));
      $$('[data-script-collection]').forEach((button) => button.classList.toggle("active", button.dataset.scriptCollection === scriptCollectionFilter));
      $$('[data-script-view]').forEach((button) => button.classList.toggle("active", button.dataset.scriptView === scriptViewMode));

      Object.entries(scriptFilterOptions).forEach(([key, options]) => {
        const control = $(`[data-script-filter="${key}"]`);
        const menu = $(`[data-script-filter-menu="${key}"]`);
        if (!control || !menu) return;
        const current = scriptFilters[key];
        control.classList.toggle("active", current !== "全部" || openScriptFilterKey === key);
        control.querySelector("span").textContent = current === "全部" ? scriptFilterLabels[key] : current;
        menu.classList.toggle("show", openScriptFilterKey === key);
        menu.innerHTML = options.map((option) => `<button class="${current === option ? "active" : ""}" data-script-filter-option="${key}" data-script-filter-value="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("");
      });

      const activeFilters = Object.entries(scriptFilters).filter(([, value]) => value !== "全部");
      if (scriptAdvancedFilters.creator !== "全部") activeFilters.push(["creator", scriptAdvancedFilters.creator]);
      if (scriptAdvancedFilters.minConversion > 0) activeFilters.push(["minConversion", `转化率 ≥ ${scriptAdvancedFilters.minConversion}%`]);
      $("#scriptActiveFilters").innerHTML = activeFilters.length ? `
        <span>当前筛选：</span>
        ${activeFilters.map(([key, value]) => `<button class="script-active-filter" data-script-clear-filter="${key}">${escapeHtml(value)}<iconify-icon icon="lucide:x"></iconify-icon></button>`).join("")}
        <button class="script-clear-filters" data-script-clear-filters>清空</button>
      ` : `<span>当前未设置筛选条件，展示全部可用话术包</span>`;

      $("#scriptResultCount").textContent = `共 ${visibleScripts.length} 个话术包`;
      $("#scriptSortButton").childNodes[0].textContent = scriptSortMode;
      if (!visibleScripts.length) {
        $("#scriptContent").innerHTML = `<div class="empty"><strong>未找到符合条件的话术包</strong>请调整筛选条件或清空当前搜索。</div>`;
      } else if (scriptViewMode === "list") {
        $("#scriptContent").innerHTML = renderScriptListView(visibleScripts);
      } else if (scriptViewMode === "flow") {
        $("#scriptContent").innerHTML = renderScriptFlowView(visibleScripts);
      } else {
        $("#scriptContent").innerHTML = `<div class="script-package-grid">${visibleScripts.map(({ item, index }) => renderScriptPackageCard(item, index)).join("")}</div>`;
      }

      const selectedCount = selectedScriptIds.size;
      $("#scriptBatchbar").classList.toggle("show", selectedCount > 0);
      $("#scriptSelectedCount").textContent = selectedCount;
      $("#scriptBatchbar .script-batch-count span").textContent = `已选择 ${selectedCount} 条`;
    }

    function openScriptDetail(item) {
      scriptDetailId = item.id;
      renderScriptLibrary();
      return;

      openWorkflow({
        title: item.title,
        confirmLabel: "复制示例话术",
        body: `
          <div class="workflow-summary"><strong>${escapeHtml(item.scope)} · ${escapeHtml(item.status)}</strong><span>${item.scriptCount} 条话术 · ${item.nodes} 个流程节点 · 使用 ${item.uses.toLocaleString()} 次 · 转化 ${item.conversion}%</span></div>
          <div class="workflow-list">
            <div class="workflow-list-item"><strong>适用范围</strong><span>${escapeHtml(item.projects.join(" / "))}</span></div>
            <div class="workflow-list-item"><strong>渠道</strong><span>${escapeHtml(item.channels.join(" / "))}</span></div>
            <div class="workflow-list-item"><strong>创建与更新</strong><span>${escapeHtml(item.creator)} · ${escapeHtml(item.updated)}</span></div>
          </div>
          <div class="material"><strong>示例话术</strong><span>${escapeHtml(item.content)}</span></div>
        `,
        onConfirm: async () => {
          await copyText(item.content);
          item.uses += 1;
          renderScriptLibrary();
          recordOperation("复制话术", item.title, "示例话术已复制");
          showToast("话术已复制");
        }
      });
    }

    function openScriptAdvancedFilters() {
      const creators = ["全部", ...new Set(scripts.map((item) => item.creator))];
      openWorkflow({
        title: "更多筛选",
        confirmLabel: "应用筛选",
        body: `
          <div class="workflow-summary"><strong>组合筛选话术包</strong><span>按创建人和最低转化率进一步缩小结果。</span></div>
          <label class="form-row"><span>创建人</span><select class="field" id="workflowScriptCreator">${creators.map((item) => `<option ${item === scriptAdvancedFilters.creator ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>
          <label class="form-row"><span>最低转化率</span><input class="field" id="workflowScriptConversion" type="number" min="0" max="100" value="${scriptAdvancedFilters.minConversion}" /></label>
        `,
        onConfirm: () => {
          scriptAdvancedFilters.creator = $("#workflowScriptCreator").value;
          scriptAdvancedFilters.minConversion = Math.max(0, Number($("#workflowScriptConversion").value) || 0);
          renderScriptLibrary();
          showToast("高级筛选已应用");
        }
      });
    }

    function handleScriptBatchAction(action, selectedItems) {
      const summary = `<div class="workflow-summary"><strong>已选择 ${selectedItems.length} 个话术包</strong><span>${selectedItems.map((item) => escapeHtml(item.title)).join("、")}</span></div>`;
      if (["发布", "停用", "提交审核"].includes(action)) {
        const status = action === "发布" ? "已发布" : action === "停用" ? "已停用" : "待审核";
        openWorkflow({
          title: `${action}话术包`,
          confirmLabel: `确认${action}`,
          body: `${summary}<div class="workflow-external"><strong>状态将立即回写</strong><span>${action === "发布" ? "发布后可在会话和群发中调用。" : action === "停用" ? "停用后保留历史引用，但不能新增调用。" : "提交后进入审核队列。"}</span></div>`,
          onConfirm: () => {
            selectedItems.forEach((item) => item.status = status);
            renderScriptLibrary();
            recordOperation(action, `${selectedItems.length} 个话术包`, `状态：${status}`);
            showToast(`已${action} ${selectedItems.length} 个话术包`);
          }
        });
        return;
      }
      if (action === "移动到话术包") {
        const collections = [...new Set(scripts.map((item) => item.collection))];
        openWorkflow({
          title: "移动到话术集合",
          confirmLabel: "确认移动",
          body: `${summary}<label class="form-row"><span>目标集合</span><select class="field" id="workflowScriptCollection">${collections.map((item) => `<option>${escapeHtml(item)}</option>`).join("")}</select></label>`,
          onConfirm: () => {
            const value = $("#workflowScriptCollection").value;
            selectedItems.forEach((item) => item.collection = value);
            renderScriptLibrary();
            recordOperation("移动话术包", value, `${selectedItems.length} 个话术包`);
            showToast(`已移动到「${value}」`);
          }
        });
        return;
      }
      if (action === "批量打标签") {
        openWorkflow({
          title: "批量添加话术标签",
          confirmLabel: "应用标签",
          body: `${summary}<label class="form-row"><span>标签名称</span><input class="field" id="workflowScriptTag" placeholder="例如：高转化" /></label>`,
          onConfirm: () => {
            const value = $("#workflowScriptTag").value.trim();
            if (!value) { showToast("请输入标签名称"); return false; }
            selectedItems.forEach((item) => {
              item.tags = item.tags || [];
              if (!item.tags.includes(value)) item.tags.push(value);
            });
            recordOperation("话术打标签", value, `${selectedItems.length} 个话术包`);
            showToast(`已为 ${selectedItems.length} 个话术包添加「${value}」`);
          }
        });
        return;
      }
      if (action === "导出") {
        openWorkflow({
          title: "导出话术包",
          confirmLabel: "下载 JSON",
          body: `${summary}<span class="table-meta">导出内容包含示例话术、适用场景、渠道、状态与转化数据。</span>`,
          onConfirm: () => {
            downloadTextFile(`话术包-${Date.now()}.json`, JSON.stringify(selectedItems, null, 2));
            recordOperation("导出话术包", `${selectedItems.length} 个`, "本地 JSON 已下载");
            showToast("话术包已导出");
          }
        });
      }
    }

    function renderSupplementModules() {
      $("#blacklistRows").innerHTML = blacklist.map((item, index) => `
        <tr><td><strong>${item.customer}</strong></td><td>${item.reason}</td><td>${item.time}</td><td>${item.operator}</td><td><button class="btn small" data-remove-blacklist="${index}">移出</button></td></tr>
      `).join("");
      $("#channelCodeRows").innerHTML = channelCodes.map((item, index) => `
        <tr><td><strong>${item.name}</strong><div class="table-meta">自动标签：渠道_${item.name.slice(0, 3)}</div></td><td>${item.today}</td><td>${item.total}</td><td>${item.assign}</td><td><span class="chip ${item.status === "停用" ? "neutral" : ""}">${item.status}</span></td><td><button class="btn small" data-view-channel="${index}">详情</button></td></tr>
      `).join("");
      $("#tagGroupRows").innerHTML = tagGroupTasks.map((item, index) => `
        <tr>
          <td><strong>${item.title}</strong><div class="table-meta">每群 ${item.size || 200} 人</div></td>
          <td>${item.rule}</td>
          <td>${item.target}</td>
          <td>${item.groups}</td>
          <td><span class="chip ${item.status === "执行中" || item.status === "待执行" ? "amber" : ""}">${item.status}</span></td>
          <td><button class="btn small" data-run-tag-group="${index}">${item.status === "已完成" ? "查看群" : item.status === "执行中" ? "完成建群" : "执行建群"}</button></td>
        </tr>
      `).join("");
      $("#momentRows").innerHTML = moments.map((item, index) => `
        <tr><td><strong>${item.title}</strong><div class="table-meta">自动标签：七夕意向</div></td><td>${item.staff}</td><td>${item.time}</td><td>${item.views}</td><td><span class="chip ${item.status === "定时" ? "amber" : ""}">${item.status}</span></td><td><button class="btn small" data-view-moment="${index}">详情</button></td></tr>
      `).join("");
      renderScriptLibrary();
      $("#promoRows").innerHTML = promos.map((item) => {
        const rate = item.scans ? `${((item.converts / item.scans) * 100).toFixed(1)}%` : "0%";
        return `<tr><td><strong>${item.name}</strong></td><td>${item.scans}</td><td>${item.converts}</td><td>${rate}</td><td><button class="btn small" data-download-promo="${item.name}">下载码</button></td></tr>`;
      }).join("");
      if (!customForms[selectedCustomFormIndex]) selectedCustomFormIndex = 0;
      $("#formRows").innerHTML = customForms.map((item, index) => `
        <tr data-form-row="${index}" class="${index === selectedCustomFormIndex ? "form-selected" : ""}">
          <td><strong>${item.name}</strong><div class="table-meta">${item.scene || "资料收集"}</div></td>
          <td>${item.submits}</td>
          <td>${item.fields}</td>
          <td><span class="chip">${item.tag}</span></td>
          <td><button class="btn small" data-view-form="${index}">查看数据</button></td>
        </tr>
      `).join("");
      renderCustomFormData(selectedCustomFormIndex);
      $("#radarRows").innerHTML = radars.map((item, index) => `
        <tr><td><strong>${item.name}</strong></td><td>${item.type}</td><td>${item.today}</td><td>${item.total}</td><td><span class="chip">${item.tag}</span></td><td><span class="table-action-cell"><button class="btn small" data-radar-tag="${index}" title="给打开客户批量打标签">打标签</button></span></td></tr>
      `).join("");
      $("#fraudRows").innerHTML = fraudTasks.map((item, index) => `
        <tr><td><strong>${item.name}</strong></td><td>${item.users}</td><td><span class="chip amber">${item.blocked}</span></td><td><span class="chip ${item.status === "监控中" ? "amber" : ""}">${item.status}</span></td><td><button class="btn small" data-block-fraud="${index}">查看拦截</button></td></tr>
      `).join("");
      $("#memberStatRows").innerHTML = memberStats.map((item) => `
        <tr><td><strong>${item.staff}</strong></td><td>${item.newCustomers}</td><td>${item.chats}</td><td>${item.broadcasts}</td><td>${item.followRate}</td><td>${item.response}</td></tr>
      `).join("");
      $("#liveRows").innerHTML = liveStats.map((item) => `
        <tr class="${item.title === selectedLiveTitle ? "live-selected" : ""}" data-live-row="${item.title}">
          <td><strong>${item.title}</strong><div class="table-meta">推荐标签：${item.tag}</div></td>
          <td>${item.viewers}</td>
          <td>${item.comments}</td>
          <td>${item.avg}</td>
          <td><button class="btn small" data-open-live="${item.title}">观看客户</button></td>
        </tr>
      `).join("");
      renderLiveViewerPanel();
      $("#qrStatRows").innerHTML = qrStats.map((item) => {
        const rate = item.generated ? `${((item.scans / item.generated) * 100).toFixed(1)}%` : "0%";
        return `<tr><td><strong>${item.staff}</strong></td><td>${item.generated}</td><td>${item.scans}</td><td>${rate}</td><td>${item.added}</td></tr>`;
      }).join("");
      const logKeyword = ($("#logSearch")?.value || "").trim();
      $("#logRows").innerHTML = operationLogs
        .filter((item) => !logKeyword || `${item.time}${item.staff}${item.type}${item.object}${item.detail}`.includes(logKeyword))
        .map((item) => `<tr><td>${item.time}</td><td>${item.staff}</td><td>${item.type}</td><td>${item.object}</td><td>${item.detail}</td></tr>`)
        .join("");
    }

    function renderLiveViewerPanel() {
      const item = liveStats.find((stat) => stat.title === selectedLiveTitle) || liveStats[0];
      if (!item || !$("#liveViewerTitle")) return;
      selectedLiveTitle = item.title;
      $("#liveViewerSubtitle").textContent = `已选择${item.title}`;
      $("#liveViewerTitle").textContent = item.title;
      $("#liveViewerDesc").textContent = item.desc;
      $("#liveViewerTag").textContent = item.tag;
      $("#liveViewerCount").textContent = item.viewers.toLocaleString();
      $("#liveViewerComments").textContent = item.comments.toLocaleString();
      $("#liveViewerAvg").textContent = item.avg;
      $$("tr[data-live-row]").forEach((row) => row.classList.toggle("live-selected", row.dataset.liveRow === item.title));
    }

    function blacklistCandidateIndexes() {
      return customers
        .map((customer, index) => ({ customer, index }))
        .filter((item) => !blacklist.some((blocked) => blocked.customer === item.customer.name));
    }

    const blacklistReasons = ["客诉高风险", "薅羊毛", "频繁骚扰", "运营手动标记"];

    function closeBlacklistSelects() {
      $("#blacklistCustomerSelectBox")?.classList.remove("open");
      $("#blacklistReasonSelectBox")?.classList.remove("open");
    }

    function renderBlacklistCustomerSelect(candidates = blacklistCandidateIndexes()) {
      const value = $("#blacklistCustomerSelect").value;
      const selected = candidates.find((item) => String(item.index) === String(value));
      $("#blacklistCustomerSelectText").textContent = selected
        ? `${selected.customer.name} · ${selected.customer.phone} · ${selected.customer.owner}`
        : "暂无可加入客户";
      $("#blacklistCustomerSelectMenu").innerHTML = candidates.length
        ? candidates.map(({ customer, index }) => `
          <button class="custom-option ${String(index) === String(value) ? "active" : ""}" type="button" data-blacklist-customer-option="${index}">
            <span>${customer.name} · ${customer.phone} · ${customer.owner}</span>
          </button>
        `).join("")
        : `<button class="custom-option active" type="button" disabled>暂无可加入客户</button>`;
    }

    function renderBlacklistReasonSelect() {
      const value = $("#blacklistReasonInput").value || "运营手动标记";
      $("#blacklistReasonSelectText").textContent = value;
      $("#blacklistReasonSelectMenu").innerHTML = blacklistReasons.map((reason) => `
        <button class="custom-option ${reason === value ? "active" : ""}" type="button" data-blacklist-reason-option="${reason}">
          <span>${reason}</span>
        </button>
      `).join("");
    }

    function updateBlacklistPreview() {
      const customer = customers[Number($("#blacklistCustomerSelect").value)];
      if (!customer) {
        $("#blacklistPreview").innerHTML = `<strong>暂无可加入客户</strong><span class="table-meta">客户管理中的潜客已全部在黑名单内，可先移出后重新选择。</span>`;
        return;
      }
      $("#blacklistPreview").innerHTML = `
        <strong>${customer.name}</strong>
        <span class="table-meta">${customer.phone} · ${customer.owner} · ${customer.status}</span>
        <div class="tag-wrap">${customer.tags.slice(0, 3).map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div>
      `;
    }

    function openBlacklistModal() {
      const candidates = blacklistCandidateIndexes();
      const select = $("#blacklistCustomerSelect");
      select.value = candidates[0]?.index ?? "";
      if (candidates.some((item) => item.index === selectedCustomerIndex)) {
        select.value = selectedCustomerIndex;
      }
      $("#blacklistReasonInput").value = "运营手动标记";
      renderBlacklistCustomerSelect(candidates);
      renderBlacklistReasonSelect();
      updateBlacklistPreview();
      openModal("#blacklistModal");
    }

    function addBlacklistCustomer() {
      const customer = customers[Number($("#blacklistCustomerSelect").value)];
      if (!customer) {
        showToast("请选择可加入黑名单的客户");
        return;
      }
      const reason = $("#blacklistReasonInput").value || "运营手动标记";
      if (!blacklist.some((item) => item.customer === customer.name)) {
        blacklist.unshift({ customer: customer.name, reason, time: "刚刚", operator: currentAccount().name });
      }
      closeModal("#blacklistModal");
      renderSupplementModules();
      renderCustomers(selectedCustomerIndex);
      showToast(`${customer.name} 已加入黑名单，后续群发自动过滤`);
    }

    function updateTagGroupTaskPreview() {
      const title = $("#tagGroupTaskName").value.trim() || "未命名建群任务";
      const rule = $("#tagGroupRuleInput").value;
      const target = Math.max(1, Number($("#tagGroupTargetInput").value) || 1);
      const size = Math.max(1, Number($("#tagGroupSizeInput").value) || 200);
      const groupCount = Math.ceil(target / size);
      $("#tagGroupTaskPreview").innerHTML = `
        <strong>${title}</strong>
        <span class="table-meta">筛选条件：${rule}；目标 ${target.toLocaleString()} 人；预计拆分 ${groupCount} 个群。创建后进入“待执行”，不会立即建群。</span>
        <div class="tag-wrap"><span class="chip">${rule.split(" + ")[0]}</span><span class="chip amber">待执行</span></div>
      `;
    }

    function openTagGroupTaskModal() {
      $("#tagGroupTaskName").value = "VIP专属群";
      $("#tagGroupRuleInput").value = "高意向 + 老客";
      $("#tagGroupTargetInput").value = "1250";
      $("#tagGroupSizeInput").value = "200";
      $("#tagGroupWelcomeInput").value = $("#groupWelcomeText")?.value || "欢迎加入[群名称]，这里会同步皮肤管理福利和预约名额。";
      updateTagGroupTaskPreview();
      openModal("#tagGroupTaskModal");
    }

    function createTagGroupTask() {
      const title = $("#tagGroupTaskName").value.trim();
      const target = Math.max(1, Number($("#tagGroupTargetInput").value) || 1);
      const size = Math.max(1, Number($("#tagGroupSizeInput").value) || 200);
      if (!title) {
        showToast("请输入任务名称");
        return;
      }
      tagGroupTasks.unshift({
        title,
        rule: $("#tagGroupRuleInput").value,
        target,
        size,
        groups: 0,
        status: source === "save" ? "草稿" : "审批中",
        welcome: $("#tagGroupWelcomeInput").value.trim()
      });
      closeModal("#tagGroupTaskModal");
      renderSupplementModules();
      showToast("建群任务已创建为待执行，可在列表中点击“执行建群”");
    }

    function handleTagGroupTask(index) {
      const task = tagGroupTasks[index];
      if (!task) return;
      if (task.status === "已完成") {
        activateScreen("customers");
        const groupButton = document.querySelector('#screen-customers .subnav-button[data-subtarget="groups"]');
        if (groupButton) switchSubscreen(groupButton);
        showToast(`已进入群聊管理查看「${task.title}」相关群`);
        return;
      }
      if (task.status === "执行中") {
        task.status = "已完成";
        task.groups = Math.ceil(Number(task.target) / Number(task.size || 200));
        const groupId = `g${Date.now()}`;
        if (!groups.some((group) => group.name === `${task.title} 001群`)) {
          groups.unshift({
            id: groupId,
            name: `${task.title} 001群`,
            meta: task.rule,
            members: Math.min(Number(task.size || 200), Number(task.target)),
            owner: currentAccount().name,
            tag: task.rule.includes("复购") ? "复购群" : "VIP群",
            active: "刚刚"
          });
          selectedGroupId = groupId;
        }
        renderSupplementModules();
        renderGroups();
        showToast(`${task.title} 已完成建群，生成 ${task.groups} 个客户群`);
        return;
      }
      task.status = "执行中";
      renderSupplementModules();
      showToast(`${task.title} 已开始执行，系统将按 ${task.size || 200} 人/群拆分`);
    }

    function sampleFormSubmissions(form) {
      const isPostCare = form.name.includes("术后") || form.scene === "术后反馈";
      const isRepurchase = form.name.includes("复购") || form.scene === "复购意向";
      if (isPostCare) {
        return [
          { customer: "林女士", skin: "泛红轻微", project: "术后修护", tag: "术后回访" },
          { customer: "周女士", skin: "干燥紧绷", project: "补水修护", tag: "客诉敏感" }
        ];
      }
      if (isRepurchase) {
        return [
          { customer: "陈女士", skin: "混合", project: "水光", tag: "水光复购" },
          { customer: "梁女士", skin: "干性", project: "皮肤管理", tag: "老客" }
        ];
      }
      return [
        { customer: "张女士", skin: "敏感", project: "热玛吉", tag: "抗衰咨询" },
        { customer: "陈女士", skin: "混合", project: "水光", tag: "水光复购" }
      ];
    }

    function renderCustomFormData(index = selectedCustomFormIndex) {
      const form = customForms[index] || customForms[0];
      if (!form || !$("#formDataPane")) return;
      selectedCustomFormIndex = index;
      const rows = sampleFormSubmissions(form);
      $("#formDataPane").innerHTML = `
        <div class="panel-head">
          <div class="panel-title"><strong>表单数据</strong><span>${form.name} · ${form.submits.toLocaleString()} 次提交</span></div>
        </div>
        <div class="metric-row">
          <div class="mini-stat"><span>提交数</span><strong>${form.submits.toLocaleString()}</strong></div>
          <div class="mini-stat"><span>字段数</span><strong>${form.fields}</strong></div>
        </div>
        <div class="form-area" style="padding-top:0">
          <div class="material">
            <strong>自动打标签</strong>
            <span class="table-meta">客户提交后自动写入「${form.tag}」，并可进入客户运营继续跟进。</span>
            <div class="tag-wrap"><span class="chip">${form.tag}</span></div>
          </div>
        </div>
        <table>
          <thead><tr><th>客户</th><th>肤质/状态</th><th>关注项目</th></tr></thead>
          <tbody>${rows.map((row) => `<tr><td>${row.customer}</td><td>${row.skin}</td><td><span class="chip ${chipClass(row.tag)}">${row.project}</span></td></tr>`).join("")}</tbody>
        </table>
      `;
      $$("tr[data-form-row]").forEach((row) => row.classList.toggle("form-selected", Number(row.dataset.formRow) === selectedCustomFormIndex));
    }

    function updateCustomFormPreview() {
      const name = $("#customFormNameInput").value.trim() || "未命名表单";
      const scene = $("#customFormSceneInput").value;
      const fields = Array.from(customFormFieldSelection);
      const tag = $("#customFormTagInput").value.trim() || `表单_${scene}`;
      $("#customFormPreview").innerHTML = `
        <strong>${name}</strong>
        <span class="table-meta">场景：${scene}；字段：${fields.join("、")}；提交后自动写入标签「${tag}」。</span>
        <div class="tag-wrap">${fields.map((field) => `<span class="chip neutral">${field}</span>`).join("")}<span class="chip">${tag}</span></div>
      `;
    }

    function openCustomFormModal() {
      customFormFieldSelection = new Set(["姓名", "手机号", "肤质", "关注项目"]);
      $("#customFormNameInput").value = "术后反馈表";
      $("#customFormSceneInput").value = "术后反馈";
      $("#customFormTagInput").value = "表单_术后反馈";
      $$("[data-form-field]").forEach((button) => button.classList.toggle("active", customFormFieldSelection.has(button.dataset.formField)));
      updateCustomFormPreview();
      openModal("#customFormModal");
    }

    function createCustomForm() {
      const name = $("#customFormNameInput").value.trim();
      if (!name) {
        showToast("请输入表单名称");
        return;
      }
      const scene = $("#customFormSceneInput").value;
      const tag = $("#customFormTagInput").value.trim() || `表单_${scene}`;
      customForms.unshift({
        name,
        scene,
        submits: 0,
        fields: customFormFieldSelection.size || 1,
        tag
      });
      selectedCustomFormIndex = 0;
      ensureManagedTag(tag);
      closeModal("#customFormModal");
      renderSupplementModules();
      renderTagManagement();
      showToast(`表单「${name}」已创建，可查看数据或投放到群发`);
    }

    function renderMigrationBoard() {
      const lanes = ["待迁移", "迁移中", "已完成", "失败"];
      $("#migrationBoard").innerHTML = lanes.map((lane) => {
        const list = migrationTasks.filter((task) => task.status === lane);
        return `
          <div class="lane">
            <h4>${lane} <span class="chip ${lane === "失败" ? "red" : lane === "迁移中" ? "amber" : lane === "待迁移" ? "neutral" : ""}">${list.length}</span></h4>
            ${list.map((task) => `
              <div class="task-card">
                <strong>${task.from} → ${task.to}</strong>
                <p>${task.scope}</p>
                ${task.status === "迁移中" ? `<div class="bar" style="width:100%;margin-top:10px"><i style="width:${task.progress}%"></i></div>` : ""}
              </div>
            `).join("") || `<div class="empty"><strong>暂无任务</strong><span>新任务会出现在这里。</span></div>`}
          </div>
        `;
      }).join("");
      $("#migrationPendingStat").textContent = migrationTasks.filter((task) => task.status === "待迁移").reduce((sum, task) => sum + task.count, 0).toLocaleString();
      $("#migrationRunningStat").textContent = migrationTasks.filter((task) => task.status === "迁移中").reduce((sum, task) => sum + task.count, 0).toLocaleString();
      $("#migrationDoneStat").textContent = (9514 + migrationTasks.filter((task) => task.status === "已完成").reduce((sum, task) => sum + task.count, 0)).toLocaleString();
      $("#migrationFailStat").textContent = migrationTasks.filter((task) => task.status === "失败").reduce((sum, task) => sum + task.count, 0).toLocaleString();
    }

    function broadcastIndex(id) { return broadcasts.findIndex((task) => task.id === id); }
    function transitionBroadcast(task, next, action, note = "") {
      if (!task || !broadcastStates[next] || !broadcastStates[task.status]?.next.includes(next)) return false;
      const from = task.status;
      task.status = next;
      task.operationLog.unshift({ action, from, to: next, note, operator: currentAccount().name, time: broadcastNow() });
      recordOperation(action, task.title, `${from} → ${next}${note ? ` · ${note}` : ""}`);
      return true;
    }
    function broadcastAction(task, index) {
      if (task.status === "草稿" || task.status === "已驳回") return `<button class="btn small primary" data-submit-broadcast="${task.id}">提交审批</button>`;
      if (task.status === "审批中") return `<button class="btn small" data-open-approval="${task.id}">处理审批</button>`;
      if (task.status === "待定时发送") return `<button class="btn small primary" data-run-broadcast="${index}">开始发送</button>`;
      if (task.status === "待员工确认") return `<button class="btn small primary" data-run-broadcast="${index}">员工确认</button>`;
      return `<button class="btn small" data-detail-broadcast="${index}">详情</button>`;
    }
    function renderBroadcasts() {
      const rows = broadcasts.map((item, index) => ({ ...item, index })).filter((item) => !item.archived && (broadcastFilter === "全部" || item.status === broadcastFilter));
      if (!rows.some((item) => item.index === selectedBroadcastIndex)) selectedBroadcastIndex = rows[0]?.index ?? 0;
      $("#broadcastRows").innerHTML = rows.length ? rows.map((item) => {
        const progress = item.target ? Math.round(((item.success + item.fail) / item.target) * 100) : 0;
        return `<tr data-broadcast-row="${item.index}" class="${item.index === selectedBroadcastIndex ? "broadcast-selected" : ""}">
          <td><strong>${item.title}</strong><div class="table-meta">${item.targetType} · ${item.status === "发送中" ? `发送进度 ${progress}%` : `素材：${item.assets.join("、")}`}</div></td>
          <td>${item.target.toLocaleString()}</td><td>${item.success.toLocaleString()}</td><td>${item.fail.toLocaleString()}</td>
          <td><span class="chip ${broadcastStates[item.status]?.tone || ""}">${item.status}</span></td><td>${item.creator}</td><td>${item.time}</td>
          <td class="broadcast-action-cell">${broadcastAction(item, item.index)}</td></tr>`;
      }).join("") : `<tr><td colspan="8"><div class="empty"><strong>暂无${broadcastFilter}任务</strong><span>可新建群发或切换状态筛选。</span></div></td></tr>`;
      $$("[data-broadcast-filter]").forEach((button) => button.classList.toggle("active", button.dataset.broadcastFilter === broadcastFilter));
      renderBroadcastDetail(selectedBroadcastIndex);
    }
    function renderBroadcastDetail(index = selectedBroadcastIndex) {
      const task = broadcasts[index] || broadcasts[0]; if (!task || !$("#broadcastDetailBody")) return;
      selectedBroadcastIndex = broadcasts.indexOf(task);
      const progress = task.target ? Math.round(((task.success + task.fail) / task.target) * 100) : 0;
      const failureRate = task.target ? ((task.fail / task.target) * 100).toFixed(1) : "0.0";
      const riskRows = task.riskResult.items.map((item) => `<li><strong>${item.name}</strong><span>${item.level} · 影响 ${item.affected} 个</span></li>`).join("");
      const history = task.approvalHistory.map((item) => `<li><strong>${item.node}</strong><span>${item.operator} · ${item.time}<br>${item.note}</span></li>`).join("") || "<li><span>尚无审批记录</span></li>";
      const actionButtons = [];
      if (["草稿", "已驳回"].includes(task.status)) actionButtons.push(`<button class="btn primary" data-submit-broadcast="${task.id}">提交审批</button>`);
      if (task.status === "审批中") actionButtons.push(`<button class="btn primary" data-open-approval="${task.id}">处理审批</button>`);
      if (["待定时发送", "待员工确认"].includes(task.status)) actionButtons.push(`<button class="btn primary" data-run-broadcast="${index}">${task.status === "待员工确认" ? "员工确认并发送" : "管理员开始发送"}</button><button class="btn" data-remind-broadcast="${task.id}">发送前提醒</button><button class="btn" data-edit-broadcast="${task.id}">编辑时间</button><button class="btn danger" data-terminate-broadcast="${task.id}">终止</button>`);
      if (task.status === "发送中") actionButtons.push(`<button class="btn" data-pause-broadcast="${task.id}">${task.execution.paused ? "继续发送" : "暂停发送"}</button><button class="btn danger" data-terminate-broadcast="${task.id}">终止</button>`);
      if (task.status === "已完成") actionButtons.push(`<button class="btn primary" data-review-broadcast="${task.id}">查看复盘</button>${task.fail ? `<button class="btn" data-retry-broadcast="${index}">发起失败补发</button>` : ""}<button class="btn" data-copy-broadcast="${task.id}">复制任务</button><button class="btn" data-export-broadcast="${task.id}">导出明细</button><button class="btn" data-archive-broadcast="${task.id}">归档</button>`);
      $("#broadcastDetailHead").textContent = "群发任务详情";
      $("#broadcastDetailSub").textContent = `${task.status} · ${task.targetType} · ${task.executionMode}`;
      $("#broadcastDetailBody").innerHTML = `<div class="material"><strong>${task.title}</strong><span class="table-meta">${task.targetType === "客户群" ? "客户群" : "客户"}目标 ${task.target.toLocaleString()} · ${task.sendMode} · ${task.executionMode}</span><div class="tag-wrap"><span class="chip ${chipClass(task.tag)}">${task.tag}</span><span class="chip ${broadcastStates[task.status]?.tone || ""}">${task.status}</span></div></div>
        <div class="metric-row" style="padding:0;border:0"><div class="mini-stat"><span>目标</span><strong>${task.target}</strong></div><div class="mini-stat"><span>成功</span><strong>${task.success}</strong></div><div class="mini-stat"><span>待发</span><strong>${task.execution.pending}</strong></div><div class="mini-stat"><span>失败</span><strong>${task.fail}</strong></div></div>
        <div class="material"><strong>执行监控 ${task.status === "发送中" ? `· ${progress}%` : ""}</strong><span class="table-meta">${task.status === "待员工确认" ? "需由指定员工在企微侧确认后开始；当前为 Demo 状态模拟。" : task.status === "待定时发送" ? "管理员直发队列，发送前 30 分钟会产生提醒。" : "任务状态、失败原因和风险回写均保留在此任务。"}</span><div class="bar" style="width:100%;margin-top:12px"><i style="width:${Math.min(progress, 100)}%"></i></div>${task.fail ? `<div class="broadcast-alert ${Number(failureRate) > 10 ? "risk" : ""}">失败率 ${failureRate}% · ${task.execution.failureReasons.map((r) => `${r.reason} ${r.count}`).join("；")}</div>` : ""}${task.execution.p0Alert ? `<div class="broadcast-alert risk">新增 P0 客诉风险：已暂停新增风险对象，需人工复核。</div>` : ""}</div>
        <div class="broadcast-detail-grid"><div><strong>前置风控</strong><ul class="broadcast-history">${riskRows}</ul></div><div><strong>审批留痕</strong><ul class="broadcast-history">${history}</ul></div></div>
        ${task.review ? `<div class="material"><strong>完成复盘</strong><div class="tag-wrap"><span class="chip green">成功率 ${task.target ? ((task.success/task.target)*100).toFixed(1) : 0}%</span><span class="chip">${task.review.clickRate}</span><span class="chip">${task.review.conversion}</span><span class="chip">${task.review.churn}</span></div></div>` : ""}<div class="actions">${actionButtons.join("")}</div>`;
      refreshAssistantMini();
      $$("tr[data-broadcast-row]").forEach((row) => row.classList.toggle("broadcast-selected", Number(row.dataset.broadcastRow) === selectedBroadcastIndex));
    }

    function openBroadcastDetail(index) {
      renderBroadcastDetail(index);
      const pane = $("#broadcastDetailPane");
      if (!pane) return;
      pane.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function assetStatusForScope(asset) {
      if (assetScopeFilter === "回收站") return asset.status === "已归档";
      if (asset.status === "已归档") return false;
      if (assetScopeFilter === "待审核") return asset.status === "待审核";
      if (assetScopeFilter === "已过期") return asset.status === "已过期";
      if (assetScopeFilter === "我上传的") return asset.creator === currentAccount().name || asset.creator === "陈内容";
      if (assetScopeFilter === "最近使用") return asset.uses >= 19;
      if (assetScopeFilter === "我的收藏") return Boolean(asset.favorite);
      return true;
    }

    function filteredAssets() {
      const keyword = ($("#assetSearchInput")?.value || "").trim();
      return assets.filter((asset) => {
        const typeMatch = assetTypeFilter === "全部" || asset.type === assetTypeFilter;
        const dirMatch = assetDirFilter === "全部素材" || asset.dir === assetDirFilter;
        const statusMatch = assetStatusFilter === "全部状态" || asset.status === assetStatusFilter;
        const scopeMatch = assetStatusForScope(asset);
        const keywordMatch = !keyword || [asset.title, asset.type, asset.dir, asset.project, asset.channel, asset.package, ...(asset.tags || [])].some((value) => String(value).includes(keyword));
        return typeMatch && dirMatch && statusMatch && scopeMatch && keywordMatch;
      });
    }

    function filteredAssetPackages() {
      const keyword = ($("#assetSearchInput")?.value || "").trim();
      return assetPackages.filter((pack) => {
        const dirMatch = assetDirFilter === "全部素材" || pack.dir === assetDirFilter;
        const statusMatch = assetStatusFilter === "全部状态" || pack.status === assetStatusFilter;
        const scopeMatch = assetScopeFilter === "待审核" ? pack.status === "待审核"
          : assetScopeFilter === "已过期" ? pack.status === "已过期"
            : assetScopeFilter === "最近使用" ? pack.uses >= 80
              : assetScopeFilter === "我的收藏" ? Boolean(pack.favorite)
                : true;
        const keywordMatch = !keyword || [pack.title, pack.dir, pack.project, pack.scene, ...(pack.tags || [])].some((value) => String(value).includes(keyword));
        return dirMatch && statusMatch && scopeMatch && keywordMatch;
      });
    }

    function assetTypeIcon(type) {
      return type === "图片" ? "icon-park-outline:pic"
        : type === "视频" ? "icon-park-outline:play-one"
          : type === "文本" ? "icon-park-outline:edit"
            : "icon-park-outline:file-doc";
    }

    function assetTags(tags, limit = 2) {
      const visible = (tags || []).slice(0, limit);
      const hidden = Math.max(0, (tags || []).length - visible.length);
      return `<div class="tag-wrap">${visible.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}${hidden ? `<span class="chip more-count">+${hidden}</span>` : ""}</div>`;
    }

    function assetTypeCounts(types = {}) {
      return Object.entries(types).map(([key, value]) => `<span>${key.slice(0, 1)} ${value}</span>`).join("");
    }

    function assetThumbHtml(item, className = "asset-file-thumb") {
      return `<div class="${className}">${item.image ? `<img src="${item.image}" alt="${item.title}">` : `<iconify-icon icon="${item.icon || "icon-park-outline:folder"}"></iconify-icon>`}</div>`;
    }

    function renderAssetPackView() {
      const packs = filteredAssetPackages();
      return `
        <div class="asset-pack-grid">
          ${packs.map((pack) => `
            <article class="asset-pack-card ${pack.title === selectedAssetPackage ? "active" : ""}" data-asset-package="${pack.title}" data-micro-lift data-pointer-glow>
              <div class="asset-card-tools">
                <button class="icon-btn-lite favorite ${pack.favorite ? "is-favorite" : ""}" data-asset-batch-action="收藏素材包" data-asset-package-title="${pack.title}" title="${pack.favorite ? "取消收藏" : "收藏素材包"}" aria-label="${pack.favorite ? "取消收藏" : "收藏素材包"}"><iconify-icon icon="${pack.favorite ? "icon-park-solid:star" : "icon-park-outline:star"}"></iconify-icon></button>
              </div>
              ${assetThumbHtml(pack, "asset-pack-thumb")}
              <div class="asset-pack-title">
                <strong>${pack.title}</strong>
                <span class="table-meta">${pack.count} 个素材 · 最近更新 ${pack.updated}</span>
              </div>
              <div class="asset-type-counts">${assetTypeCounts(pack.types)}</div>
              ${assetTags(pack.tags)}
              <div class="asset-pack-footer">
                <div class="asset-avatars">${pack.owners.map((owner) => `<span>${owner}</span>`).join("")}</div>
                <span class="table-meta">使用 ${pack.uses} 次</span>
              </div>
            </article>
          `).join("")}
          <button class="asset-pack-card asset-create-pack" data-create-asset-package>
            <div><iconify-icon icon="icon-park-outline:plus"></iconify-icon><strong>新建素材包</strong><span class="table-meta">将多个素材归为一个专题包，便于复用。</span></div>
          </button>
        </div>
      `;
    }

    function renderAssetGridView() {
      const list = filteredAssets();
      return list.length ? `
        <div class="asset-file-grid">
          ${list.map((asset) => `
            <article class="asset-file-card ${selectedAssetTitles.has(asset.title) ? "is-selected" : ""}" data-asset-open="${asset.title}" data-micro-lift data-pointer-glow>
              <div class="asset-card-tools">
                <input class="asset-checkbox" type="checkbox" data-asset-select="${asset.title}" ${selectedAssetTitles.has(asset.title) ? "checked" : ""} aria-label="选择${asset.title}">
                <button class="icon-btn-lite favorite ${asset.favorite ? "is-favorite" : ""}" data-asset-favorite="${asset.title}" title="${asset.favorite ? "取消收藏" : "收藏素材"}" aria-label="${asset.favorite ? "取消收藏" : "收藏素材"}"><iconify-icon icon="${asset.favorite ? "icon-park-solid:star" : "icon-park-outline:star"}"></iconify-icon></button>
                <button class="icon-btn-lite" data-preview-asset="${asset.title}" title="预览"><iconify-icon icon="icon-park-outline:preview-open"></iconify-icon></button>
              </div>
              ${assetThumbHtml(asset)}
              <div class="asset-file-title">
                <strong>${asset.title}</strong>
                <span class="table-meta">${asset.type} · ${asset.package}</span>
              </div>
              ${assetTags(asset.tags)}
              <div class="asset-file-foot"><span>${asset.size}</span><span>${asset.updated}</span><span>使用 ${asset.uses} 次</span></div>
            </article>
          `).join("")}
        </div>
      ` : `<div class="empty"><strong>未找到素材</strong><span>请调整筛选条件或上传新素材。</span></div>`;
    }

    function renderAssetListView() {
      const list = filteredAssets();
      return `
        <table class="asset-table">
          <colgroup>
            <col style="width: 36px"><col style="width: 25%"><col style="width: 8%"><col style="width: 18%"><col style="width: 17%"><col style="width: 8%"><col style="width: 9%"><col style="width: 9%"><col style="width: 6%">
          </colgroup>
          <thead><tr><th></th><th>素材名称</th><th>类型</th><th>所属集合</th><th>标签</th><th>状态</th><th>创建人</th><th>更新时间</th><th>使用</th></tr></thead>
          <tbody>
            ${list.map((asset) => `
              <tr data-asset-open="${asset.title}" class="${selectedAssetTitles.has(asset.title) ? "is-selected" : ""}">
                <td><input class="asset-checkbox" type="checkbox" data-asset-select="${asset.title}" ${selectedAssetTitles.has(asset.title) ? "checked" : ""}></td>
                <td><div class="asset-row-title">${assetThumbHtml(asset, "asset-row-thumb")}<div><strong>${asset.title}</strong><div class="table-meta">${asset.channel} · ${asset.size}</div></div></div></td>
                <td>${asset.type}</td>
                <td>${asset.package}</td>
                <td>${assetTags(asset.tags, 1)}</td>
                <td><span class="chip ${chipClass(asset.status)}">${asset.status}</span></td>
                <td>${asset.creator}</td>
                <td>${asset.updated}</td>
                <td>${asset.uses}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    }

    function renderAssetFilters() {
      const labels = [
        assetDirFilter !== "全部素材" ? assetDirFilter : "",
        assetTypeFilter !== "全部" ? assetTypeFilter : "",
        assetStatusFilter !== "全部状态" ? assetStatusFilter : "",
        assetScopeFilter !== "全部素材" ? assetScopeFilter : ""
      ].filter(Boolean);
      $("#assetActiveFilters").innerHTML = labels.length
        ? `<span class="active-filter-label">当前筛选</span>${labels.map((label) => `<span class="chip">${label}</span>`).join("")}<button class="active-filter-clear" data-reset-asset-filters><iconify-icon icon="icon-park-outline:close-small"></iconify-icon><span>清空筛选</span></button>`
        : `<span>当前筛选：全部素材</span>`;
    }

    function renderAssetPackageCreate() {
      const selected = assets.filter((asset) => assetPackageDraftTitles.has(asset.title));
      $$("[data-asset-package-pane]").forEach((pane) => pane.hidden = Number(pane.dataset.assetPackagePane) !== assetPackageCreateStep);
      $$("[data-asset-package-step]").forEach((step) => step.classList.toggle("active", Number(step.dataset.assetPackageStep) === assetPackageCreateStep));
      $("#assetPackageCreatePrev").hidden = assetPackageCreateStep === 1;
      $("#assetPackageCreateNext").hidden = assetPackageCreateStep === 3;
      $("#assetPackageCreateConfirm").hidden = assetPackageCreateStep !== 3;
      $("#assetPackageDraftCount").textContent = `已选 ${selected.length} 项`;
      $("#assetPackageDraftList").innerHTML = assets.map((asset) => `<label class="asset-package-draft-row"><input type="checkbox" data-asset-package-draft-select="${escapeHtml(asset.title)}" ${assetPackageDraftTitles.has(asset.title) ? "checked" : ""}><div><strong>${escapeHtml(asset.title)}</strong><span>${escapeHtml(asset.type)} · ${escapeHtml(asset.dir)} · ${escapeHtml(asset.package)}</span></div><span class="chip ${chipClass(asset.status)}">${escapeHtml(asset.status)}</span></label>`).join("");
      if (assetPackageCreateStep === 3) {
        const title = $("#assetPackageCreateName").value.trim();
        const tags = $("#assetPackageCreateTags").value.split(/[，,]/).map((tag) => tag.trim()).filter(Boolean);
        const types = selected.reduce((counts, asset) => ({ ...counts, [asset.type]: (counts[asset.type] || 0) + 1 }), {});
        $("#assetPackageCreateSummary").innerHTML = `<div class="material"><strong>${escapeHtml(title)}</strong><span class="table-meta">${escapeHtml($("#assetPackageCreateDir").value)} · ${escapeHtml($("#assetPackageCreateProject").value)} · ${escapeHtml($("#assetPackageCreateScene").value)}</span><div class="tag-wrap">${tags.length ? tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("") : `<span class="chip neutral">未添加标签</span>`}</div></div><div class="material"><strong>${selected.length ? `将加入 ${selected.length} 项素材` : "创建空素材包"}</strong><span class="table-meta">${selected.length ? Object.entries(types).map(([type, count]) => `${type} ${count} 项`).join(" · ") : "创建后可从素材库继续加入内容。"}</span></div>`;
      }
    }

    function openAssetPackageCreate() {
      assetPackageCreateStep = 1;
      assetPackageDraftTitles = new Set(selectedAssetTitles);
      $("#assetPackageCreateName").value = "";
      $("#assetPackageCreateDir").value = ["客户运营", "节日营销", "项目科普"].includes(assetDirFilter) ? assetDirFilter : "客户运营";
      $("#assetPackageCreateProject").value = "水光项目";
      $("#assetPackageCreateScene").value = "复购运营";
      $("#assetPackageCreateTags").value = "素材包";
      renderAssetPackageCreate();
      openModal("#assetPackageCreateModal");
      $("#assetPackageCreateName").focus();
    }

    function advanceAssetPackageCreate(direction) {
      if (direction > 0 && assetPackageCreateStep === 1) {
        const title = $("#assetPackageCreateName").value.trim();
        if (!title) { showToast("请先填写素材包名称"); $("#assetPackageCreateName").focus(); return; }
        if (assetPackages.some((pack) => pack.title === title)) { showToast("素材包名称已存在，请换一个名称"); $("#assetPackageCreateName").focus(); return; }
      }
      assetPackageCreateStep = Math.min(3, Math.max(1, assetPackageCreateStep + direction));
      renderAssetPackageCreate();
    }

    function createAssetPackage() {
      const title = $("#assetPackageCreateName").value.trim();
      if (!title || assetPackages.some((pack) => pack.title === title)) { assetPackageCreateStep = 1; renderAssetPackageCreate(); showToast(title ? "素材包名称已存在，请换一个名称" : "请填写素材包名称"); return; }
      const selected = assets.filter((asset) => assetPackageDraftTitles.has(asset.title));
      const types = { 图片: 0, 文本: 0, 视频: 0, 文件: 0 };
      selected.forEach((asset) => types[asset.type] = (types[asset.type] || 0) + 1);
      const tags = $("#assetPackageCreateTags").value.split(/[，,]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 5);
      assetPackages.unshift({ title, dir: $("#assetPackageCreateDir").value, project: $("#assetPackageCreateProject").value, scene: $("#assetPackageCreateScene").value.trim() || "未设置场景", updated: "刚刚", count: selected.length, uses: 0, types, tags: tags.length ? tags : ["素材包"], owners: [currentAccount().name.slice(0, 1)], createdBy: currentAccount().name, status: "可用" });
      selected.forEach((asset) => asset.package = title);
      selectedAssetTitles.clear();
      selectedAssetPackage = title;
      activeAssetModule = "collections";
      assetViewMode = "packs";
      syncAssetModuleTabs("collections");
      closeModal("#assetPackageCreateModal");
      renderAssets();
      recordOperation("创建素材包", title, `${selected.length} 项素材 · ${$("#assetPackageCreateScene").value.trim() || "未设置场景"}`);
      showToast(selected.length ? `已创建「${title}」并加入 ${selected.length} 项素材` : `已创建空素材包「${title}」`);
    }

    function renderAssetDetail() {
      const drawer = $("#assetDetailDrawer");
      if (!drawer) return;
      if (!selectedAssetTitle) {
        drawer.classList.remove("show");
        drawer.innerHTML = "";
        return;
      }
      const asset = assets.find((item) => item.title === selectedAssetTitle);
      if (!asset) return;
      drawer.classList.add("show");
      drawer.classList.remove("package-detail");
      drawer.innerHTML = `
        <div class="asset-detail-head">
          <div><strong>素材详情</strong><div class="table-meta">引用关系、版本和使用记录</div></div>
          <button class="btn small" data-close-asset-drawer>收起</button>
        </div>
        <div class="asset-detail-preview">${asset.image ? `<img src="${asset.image}" alt="${asset.title}">` : `<iconify-icon icon="${asset.icon}"></iconify-icon>`}</div>
        <div>
          <h3>${asset.title}</h3>
          <div class="tag-wrap">${asset.tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div>
        </div>
        <div class="asset-detail-grid">
          <div class="asset-detail-stat"><span>类型</span><strong>${asset.type}</strong></div>
          <div class="asset-detail-stat"><span>状态</span><strong>${asset.status}</strong></div>
          <div class="asset-detail-stat"><span>使用</span><strong>${asset.uses} 次</strong></div>
          <div class="asset-detail-stat"><span>版本</span><strong>v1.3</strong></div>
        </div>
        <div class="info-list">
          <div class="info-row"><span>所属集合</span><strong>${asset.package}</strong></div>
          <div class="info-row"><span>项目/渠道</span><strong>${asset.project} · ${asset.channel}</strong></div>
          <div class="info-row"><span>创建人</span><strong>${asset.creator} · ${asset.updated}</strong></div>
        </div>
        <div>
          <strong>被引用任务</strong>
          <div class="asset-reference-list">${asset.refs.map((ref) => `<div><span>${ref}</span><button class="btn small" data-preview-asset="${asset.title}">查看</button></div>`).join("")}</div>
        </div>
        <div class="actions">
          <button class="btn primary" data-preview-asset="${asset.title}">预览素材</button>
          <button class="btn" data-asset-batch-action="创建新版本">创建新版本</button>
          <button class="btn" data-asset-batch-action="加入素材包">加入素材包</button>
        </div>
      `;
    }

    function packageContentEntries(pack) {
      const saved = assets.filter((asset) => asset.package === pack.title);
      const typeOrder = ["图片", "文本", "视频", "文件"];
      const entries = saved.map((asset) => ({ title: asset.title, type: asset.type, status: asset.status, updated: asset.updated, size: asset.size }));
      const suffix = { 图片: "视觉主图", 文本: "运营文案", 视频: "项目短视频", 文件: "执行说明" };
      typeOrder.forEach((type) => {
        const required = pack.types[type] || (type === "文本" ? pack.types.文案 : 0) || 0;
        const existingCount = entries.filter((entry) => entry.type === type).length;
        for (let index = existingCount; index < required; index += 1) {
          entries.push({ title: pack.scene + "·" + suffix[type] + String(index + 1).padStart(2, "0"), type, status: pack.status === "待审核" && index === existingCount ? "待审核" : "可用", updated: pack.updated, size: type === "视频" ? "00:30" : type === "图片" ? "1080×1440" : type === "文本" ? "待补充" : "PDF" });
        }
      });
      return entries.slice(0, pack.count);
    }

    function renderAssetPackageDetail() {
      const drawer = $("#assetDetailDrawer");
      const pack = assetPackages.find((item) => item.title === selectedAssetPackageDetail);
      if (!drawer || !pack || selectedAssetTitle) return;
      const entries = packageContentEntries(pack).map((entry) => ({ ...entry, asset: assets.find((asset) => asset.title === entry.title) }));
      const sortValue = (entry, key) => {
        if (key === "type") return ["图片", "视频", "文本", "文件"].indexOf(entry.type);
        if (key === "size") return Number(String(entry.asset?.fileSize || entry.size).match(/[\d.]+/)?.[0] || 0);
        return Number(String(entry.updated).replace(/[^\d]/g, "")) || 0;
      };
      entries.sort((a, b) => (sortValue(a, assetPackageSort.key) - sortValue(b, assetPackageSort.key)) * (assetPackageSort.direction === "asc" ? 1 : -1));
      const entryRows = entries.map((entry, index) => '<div class="asset-reference-row"><span class="asset-detail-row-icon"><iconify-icon icon="' + assetTypeIcon(entry.type) + '"></iconify-icon></span><div><strong>' + (index + 1) + ". " + escapeHtml(entry.title) + '</strong><span>' + escapeHtml(entry.type) + " · " + escapeHtml(entry.size) + " · 更新 " + escapeHtml(entry.updated) + '</span></div><span class="chip ' + chipClass(entry.status) + '">' + escapeHtml(entry.status) + "</span></div>").join("");
      drawer.classList.add("show", "package-detail");
      drawer.innerHTML = '<div class="asset-detail-head"><div><strong>素材包详情</strong><div class="table-meta">完整素材清单、引用与复用信息</div></div><button class="btn small" data-close-asset-drawer>收起</button></div>' +
        '<div class="asset-detail-preview">' + (pack.image ? '<img src="' + pack.image + '" alt="' + escapeHtml(pack.title) + '">' : '<iconify-icon icon="icon-park-outline:layers"></iconify-icon>') + '</div>' +
        '<div><h3>' + escapeHtml(pack.title) + '</h3>' + assetTags(pack.tags, 3) + '</div>' +
        '<div class="asset-detail-grid"><div class="asset-detail-stat"><span>素材数量</span><strong>' + pack.count + ' 项</strong></div><div class="asset-detail-stat"><span>使用次数</span><strong>' + pack.uses + ' 次</strong></div><div class="asset-detail-stat"><span>状态</span><strong>' + escapeHtml(pack.status) + '</strong></div><div class="asset-detail-stat"><span>最近更新</span><strong>' + escapeHtml(pack.updated) + '</strong></div></div>' +
        '<div class="info-list"><div class="info-row"><span>所属集合</span><strong>' + escapeHtml(pack.dir) + '</strong></div><div class="info-row"><span>适用项目 / 场景</span><strong>' + escapeHtml(pack.project) + " · " + escapeHtml(pack.scene) + '</strong></div><div class="info-row"><span>维护成员</span><strong>' + escapeHtml(pack.owners.join("、")) + '</strong></div></div>' +
        '<div class="asset-package-entry-list"><strong>素材清单（' + entries.length + '）</strong>' + entryRows + '</div>' +
        '<div class="actions"><button class="btn primary" data-open-wizard><iconify-icon icon="icon-park-outline:send-one"></iconify-icon>用于群发</button><button class="btn" data-asset-batch-action="创建新版本">创建新版本</button></div>';
    }

    function packageTypeValue(pack, type) {
      return pack.types[type] || (type === "文本" ? pack.types.文案 || 0 : 0);
    }

    function isEditablePackage(pack) {
      return pack.createdBy === currentAccount().name;
    }

    function openAssetPackagePreview(title) {
      const pack = assetPackages.find((item) => item.title === title);
      if (!pack) return;
      selectedAssetPackage = pack.title;
      selectedAssetPackageDetail = "";
      const entries = packageContentEntries(pack).map((entry) => ({ ...entry, asset: assets.find((asset) => asset.title === entry.title) }));
      const typeOrder = ["图片", "文本", "视频", "文件"];
      const typeClass = { 图片: "image", 文本: "text", 视频: "video", 文件: "file" };
      const typeSummary = typeOrder.map((type) => `<div class="asset-package-overview-item is-${typeClass[type]}"><span><i aria-hidden="true"></i>${type}</span><strong>${packageTypeValue(pack, type)}<em>项</em></strong></div>`).join("");
      const sortValue = (entry, key) => {
        if (key === "type") return ["图片", "视频", "文本", "文件"].indexOf(entry.type);
        if (key === "size") {
          const raw = String(entry.asset?.fileSize || entry.size || "");
          const dimensions = raw.match(/(\d+)\s*[×x]\s*(\d+)/i);
          if (dimensions) return Number(dimensions[1]) * Number(dimensions[2]);
          const duration = raw.match(/(\d+):(\d+)/);
          if (duration) return Number(duration[1]) * 60 + Number(duration[2]);
          return Number(raw.match(/[\d.]+/)?.[0] || 0);
        }
        return Number(String(entry.updated).replace(/[^\d]/g, "")) || 0;
      };
      entries.sort((a, b) => (sortValue(a, assetPackageSort.key) - sortValue(b, assetPackageSort.key)) * (assetPackageSort.direction === "asc" ? 1 : -1));
      const sortControl = (key, label) => `<button class="asset-package-sort ${assetPackageSort.key === key ? "is-active" : ""}" data-package-sort="${key}" aria-pressed="${assetPackageSort.key === key}">${label}${assetPackageSort.key === key ? `<span class="asset-package-sort-arrow" aria-label="${assetPackageSort.direction === "asc" ? "升序" : "降序"}">${assetPackageSort.direction === "asc" ? "↑" : "↓"}</span>` : ""}</button>`;
      const entryRows = entries.map((entry) => {
        const title = `<span class="asset-detail-row-icon"><iconify-icon icon="${assetTypeIcon(entry.type)}"></iconify-icon></span><strong>${escapeHtml(entry.title)}</strong>`;
        const titleCell = entry.asset
          ? `<button class="asset-package-table-open" data-preview-asset="${escapeHtml(entry.title)}">${title}</button>`
          : `<div class="asset-package-table-open is-placeholder">${title}</div>`;
        const status = entry.asset ? `<span class="chip ${chipClass(entry.status)}">${escapeHtml(entry.status)}</span>` : `<span class="chip neutral">待补充</span>`;
        return `<tr><td>${titleCell}</td><td>${entry.type}</td><td>${entry.asset?.fileSize || entry.size}</td><td>${entry.updated}</td><td>${status}</td></tr>`;
      }).join("");
      const linkedRefs = [...new Set(assets.filter((asset) => asset.package === pack.title).flatMap((asset) => asset.refs || []))];
      const refRows = linkedRefs.length ? linkedRefs.map((ref) => `<div class="asset-reference-row"><span class="asset-detail-row-icon"><iconify-icon icon="icon-park-outline:link"></iconify-icon></span><div><strong>${escapeHtml(ref)}</strong><span>正在引用此素材包内的内容</span></div></div>`).join("") : `<div class="empty compact"><strong>暂无已绑定任务</strong><span>素材包加入群发或运营流程后，会在这里展示引用关系。</span></div>`;
      $("#assetPackagePreviewTitle").textContent = pack.title;
      $("#assetPackagePreviewSub").textContent = `${pack.project} · ${pack.scene} · ${pack.count} 项素材`;
      $("#assetPackagePreviewBody").innerHTML = `
        <section class="asset-package-info"><div class="asset-package-summary-copy"><div class="asset-package-title-line"><h3>${escapeHtml(pack.title)}</h3><span class="chip ${chipClass(pack.status)}">${escapeHtml(pack.status)}</span></div>${assetTags(pack.tags, 3)}<p>围绕“${escapeHtml(pack.scene)}”场景编排的多类型内容包，可统一用于群发、朋友圈与顾问会话。</p><div class="asset-package-meta"><span>创建人：${escapeHtml(pack.createdBy || pack.owners.join("、"))}</span><span>维护成员：${escapeHtml(pack.owners.join("、"))}</span><span>最近更新：${escapeHtml(pack.updated)}</span></div></div><aside class="asset-package-overview" aria-label="素材总览"><div class="asset-package-overview-head"><strong>素材总览</strong><span>${entries.length} 项内容</span></div><div class="asset-package-overview-list">${typeSummary}</div></aside></section>
        <section class="asset-package-detail-section"><div class="section-label asset-package-list-head"><div><strong>素材清单（${entries.length}）</strong><span>点击已创建素材可打开详情</span></div><div class="asset-package-sort-group" role="group" aria-label="素材清单排序"><span>排序</span>${sortControl("type", "类型")}${sortControl("size", "大小")}${sortControl("updated", "创建时间")}</div></div><div class="asset-package-table-wrap"><table class="asset-package-table"><thead><tr><th>素材名称</th><th>素材类型</th><th>文件大小 / 规格</th><th>创建时间</th><th>状态</th></tr></thead><tbody>${entryRows}</tbody></table></div></section>
        <section class="asset-package-detail-section"><div class="section-label"><strong>被引用任务</strong><span>追踪素材包的运营复用情况</span></div><div class="asset-reference-list">${refRows}</div></section>
      `;
      $("#assetPackagePreviewActions").innerHTML = `${isEditablePackage(pack) ? `<button class="btn" data-edit-asset-package="${escapeHtml(pack.title)}"><iconify-icon icon="icon-park-outline:edit"></iconify-icon>编辑素材包</button>` : ""}<button class="btn" data-close-modal>关闭</button><button class="btn primary" data-open-wizard><iconify-icon icon="icon-park-outline:send-one"></iconify-icon>用于群发</button>`;
      openModal("#assetPackagePreviewModal");
    }

    function openAssetPackageEditor(title) {
      const pack = assetPackages.find((item) => item.title === title);
      if (!pack || !isEditablePackage(pack)) return;
      closeModal("#assetPackagePreviewModal");
      openWorkflow({
        title: "编辑素材包",
        confirmLabel: "保存修改",
        body: `<label class="form-row"><span>素材包名称</span><input class="field" id="assetPackageEditTitle" value="${escapeHtml(pack.title)}"></label><label class="form-row"><span>适用场景</span><input class="field" id="assetPackageEditScene" value="${escapeHtml(pack.scene)}"></label><label class="form-row"><span>标签（以中文逗号分隔）</span><input class="field" id="assetPackageEditTags" value="${escapeHtml(pack.tags.join("，"))}"></label><label class="form-row"><span>使用状态</span><select class="field" id="assetPackageEditStatus">${["可用", "待审核", "已过期"].map((status) => `<option ${status === pack.status ? "selected" : ""}>${status}</option>`).join("")}</select></label>`,
        onConfirm: () => {
          const nextTitle = $("#assetPackageEditTitle").value.trim() || pack.title;
          if (nextTitle !== pack.title && assetPackages.some((item) => item !== pack && item.title === nextTitle)) { showToast("素材包名称已存在，请换一个名称"); return; }
          const oldTitle = pack.title;
          pack.title = nextTitle;
          pack.scene = $("#assetPackageEditScene").value.trim() || pack.scene;
          pack.tags = $("#assetPackageEditTags").value.split(/[，,]/).map((tag) => tag.trim()).filter(Boolean).slice(0, 5);
          pack.status = $("#assetPackageEditStatus").value;
          pack.updated = "刚刚";
          assets.filter((asset) => asset.package === oldTitle).forEach((asset) => asset.package = nextTitle);
          selectedAssetPackage = nextTitle;
          renderAssets();
          openAssetPackagePreview(nextTitle);
          recordOperation("编辑素材包", nextTitle, "名称、场景、标签与状态已更新");
          showToast(`已保存「${nextTitle}」`);
        }
      });
    }

    function renderAssetBatchbar() {
      const count = selectedAssetTitles.size;
      const bar = $("#assetBatchbar");
      if (!bar) return;
      bar.classList.toggle("show", count > 0);
      bar.innerHTML = count ? `
        <strong>已选择 ${count} 项</strong>
        <div class="asset-batch-actions">
          <button class="btn small ghost" data-clear-asset-selection>清空选择</button>
          <button class="btn small" data-asset-batch-action="移动到集合"><iconify-icon icon="icon-park-outline:folder-move"></iconify-icon>移动到集合</button>
          <button class="btn small" data-asset-batch-action="打标签"><iconify-icon icon="icon-park-outline:tag-one"></iconify-icon>打标签</button>
          <button class="btn small" data-asset-batch-action="加入素材包"><iconify-icon icon="icon-park-outline:folder-plus"></iconify-icon>加入素材包</button>
          <button class="btn small" data-asset-batch-action="下载"><iconify-icon icon="icon-park-outline:download"></iconify-icon>下载</button>
          <button class="btn small" data-asset-batch-action="修改状态"><iconify-icon icon="icon-park-outline:circle-five-line"></iconify-icon>修改状态</button>
          <button class="btn small danger" data-asset-batch-action="归档">归档</button>
        </div>
      ` : "";
    }

    function assetTargetsFor(trigger) {
      if (trigger.closest("#assetPreviewModal") && selectedPreviewAsset) return [selectedPreviewAsset];
      if (trigger.closest("#assetDetailDrawer") && selectedAssetTitle) {
        const current = assets.find((asset) => asset.title === selectedAssetTitle);
        return current ? [current] : [];
      }
      const selected = assets.filter((asset) => selectedAssetTitles.has(asset.title));
      if (selected.length) return selected;
      const current = assets.find((asset) => asset.title === selectedAssetTitle);
      return current ? [current] : [];
    }

    function handleAssetBatchAction(action, trigger) {
      if (action === "收藏素材") {
        const asset = assets.find((item) => item.title === trigger.dataset.assetTitle);
        if (!asset) return;
        asset.favorite = !asset.favorite;
        renderAssets();
        openAssetPreview(asset.title);
        recordOperation(asset.favorite ? "收藏素材" : "取消收藏", asset.title, "素材收藏状态已回写");
        showToast(asset.favorite ? `已收藏「${asset.title}」` : `已取消收藏「${asset.title}」`);
        return;
      }
      if (action === "收藏素材包") {
        const title = trigger.dataset.assetPackageTitle || selectedAssetPackage;
        const pack = assetPackages.find((item) => item.title === title);
        if (!pack) return;
        pack.favorite = !pack.favorite;
        renderAssets();
        markOperationFeedback(`[data-asset-package="${CSS.escape(pack.title)}"]`);
        recordOperation(pack.favorite ? "收藏素材包" : "取消收藏", pack.title, "素材包收藏状态已回写");
        showToast(pack.favorite ? `已收藏「${pack.title}」` : `已取消收藏「${pack.title}」`);
        return;
      }

      const targets = assetTargetsFor(trigger);
      if (!targets.length) {
        showToast("请先选择素材");
        return;
      }
      const summary = `<div class="workflow-summary"><strong>本次处理 ${targets.length} 项素材</strong><span>${targets.slice(0, 4).map((item) => escapeHtml(item.title)).join("、")}${targets.length > 4 ? ` 等 ${targets.length} 项` : ""}</span></div>`;
      if (action === "移动到集合") {
        openWorkflow({
          title: "移动到素材目录",
          confirmLabel: "确认移动",
          body: `${summary}<label class="form-row"><span>目标集合</span><select class="field" id="workflowAssetDir">${["节日营销", "项目科普", "复购提醒", "术后关怀", "客户运营"].map((item) => `<option>${item}</option>`).join("")}</select></label>`,
          onConfirm: () => {
            const value = $("#workflowAssetDir").value;
            targets.forEach((item) => item.dir = value);
            renderAssets();
            recordOperation("移动素材", value, `${targets.length} 项素材`);
            showToast(`已移动 ${targets.length} 项素材到「${value}」`);
          }
        });
        return;
      }
      if (action === "打标签") {
        openWorkflow({
          title: "批量添加素材标签",
          confirmLabel: "应用标签",
          body: `${summary}<label class="form-row"><span>标签名称</span><input class="field" id="workflowAssetTag" placeholder="例如：老客复购" /></label><span class="table-meta">同名标签会自动去重，并同步进入标签管理。</span>`,
          onConfirm: () => {
            const value = $("#workflowAssetTag").value.trim();
            if (!value) { showToast("请输入标签名称"); return false; }
            targets.forEach((item) => { if (!item.tags.includes(value)) item.tags.push(value); });
            ensureManagedTag(value);
            renderAssets();
            renderTagManagement();
            recordOperation("素材打标签", value, `${targets.length} 项素材`);
            showToast(`已为 ${targets.length} 项素材添加「${value}」`);
          }
        });
        return;
      }
      if (action === "加入素材包") {
        openWorkflow({
          title: "加入素材包",
          confirmLabel: "确认加入",
          body: `${summary}<label class="form-row"><span>目标素材包</span><select class="field" id="workflowAssetPackage">${assetPackages.map((pack) => `<option>${escapeHtml(pack.title)}</option>`).join("")}</select></label>`,
          onConfirm: () => {
            const value = $("#workflowAssetPackage").value;
            targets.forEach((item) => item.package = value);
            const pack = assetPackages.find((item) => item.title === value);
            if (pack) pack.count = assets.filter((item) => item.package === value).length;
            renderAssets();
            recordOperation("加入素材包", value, `${targets.length} 项素材`);
            showToast(`已将 ${targets.length} 项素材加入「${value}」`);
          }
        });
        return;
      }
      if (action === "修改状态") {
        openWorkflow({
          title: "修改素材状态",
          confirmLabel: "保存状态",
          body: `${summary}<label class="form-row"><span>新状态</span><select class="field" id="workflowAssetStatus"><option>可用</option><option>待审核</option><option>已过期</option><option>已归档</option></select></label>`,
          onConfirm: () => {
            const value = $("#workflowAssetStatus").value;
            targets.forEach((item) => item.status = value);
            renderAssets();
            recordOperation("修改素材状态", value, `${targets.length} 项素材`);
            showToast(`已更新 ${targets.length} 项素材状态`);
          }
        });
        return;
      }
      if (action === "创建新版本") {
        const source = targets[0];
        openWorkflow({
          title: "创建素材新版本",
          confirmLabel: "创建版本",
          body: `${summary}<label class="form-row"><span>版本名称</span><input class="field" id="workflowAssetVersion" value="${escapeHtml(source.title)} v2" /></label><span class="table-meta">新版本会进入待审核状态，原版本和引用关系保持不变。</span>`,
          onConfirm: () => {
            const title = $("#workflowAssetVersion").value.trim();
            if (!title) { showToast("请输入版本名称"); return false; }
            if (assets.some((item) => item.title === title)) { showToast("已有同名素材"); return false; }
            assets.unshift({ ...source, title, status: "待审核", updated: "刚刚", uses: 0, tags: [...source.tags, "新版本"], refs: [`源版本：${source.title}`] });
            selectedAssetTitle = "";
            selectedAssetTitles = new Set([title]);
            renderAssets();
            openAssetPreview(title);
            recordOperation("创建素材版本", title, `源版本：${source.title}`);
            showToast(`新版本「${title}」已创建并进入待审核`);
          }
        });
        return;
      }
      if (action === "下载") {
        openWorkflow({
          title: "导出素材清单",
          confirmLabel: "下载清单",
          body: `${summary}<div class="workflow-external"><strong>源文件打包需要文件服务</strong><span>当前 Demo 将下载完整素材元数据、标签和引用关系清单，可用于评审闭环。</span></div>`,
          onConfirm: () => {
            downloadTextFile(`素材清单-${Date.now()}.json`, JSON.stringify(targets, null, 2));
            recordOperation("导出素材清单", `${targets.length} 项`, "本地 JSON 已下载；源文件打包待接入文件服务");
            showToast("素材清单已下载");
          }
        });
        return;
      }
      if (action === "归档") {
        openWorkflow({
          title: "归档素材",
          confirmLabel: "确认归档",
          body: `${summary}<div class="workflow-external"><strong>归档后不会删除数据</strong><span>素材将移入回收站，现有任务引用仍可追溯，可在回收站恢复。</span></div>`,
          onConfirm: () => {
            targets.forEach((item) => item.status = "已归档");
            selectedAssetTitles.clear();
            selectedAssetTitle = "";
            renderAssets();
            recordOperation("归档素材", `${targets.length} 项`, "已移入回收站");
            showToast(`已归档 ${targets.length} 项素材`);
          }
        });
      }
    }

    function contentComplianceState(item) {
      return item.compliance || (item.status === "待审核" ? "待审核" : item.status === "已过期" ? "需更新" : "已通过");
    }

    function renderContentCompliance() {
      const host = $("#contentCompliancePanel");
      if (!host) return;
      const items = [
        ...assets.slice(0, 4).map((item) => ({ kind: "素材", key: item.title, title: item.title, state: contentComplianceState(item), reviewer: item.creator })),
        ...scripts.slice(0, 3).map((item) => ({ kind: "话术", key: item.id, title: item.title, state: contentComplianceState(item), reviewer: item.owner || "内容运营" }))
      ].filter((item) => item.state !== "已通过");
      host.innerHTML = `<div class="panel-head"><div class="panel-title"><strong>素材与话术合规审核</strong><span>医疗表述、适用范围与版本变更均需留痕</span></div><span class="chip amber">${items.length} 项待处理</span></div>${items.length ? `<div class="compliance-list">${items.map((item) => `<article class="compliance-item"><div><span class="chip ${item.state === "待审核" ? "amber" : "rose"}">${item.kind} · ${item.state}</span><strong>${item.title}</strong><span>提交人：${item.reviewer} · 审核将写入操作日志</span></div><div class="actions"><button class="btn small" data-review-content="return" data-review-kind="${item.kind}" data-review-key="${item.key}">退回修改</button><button class="btn small primary" data-review-content="approve" data-review-kind="${item.kind}" data-review-key="${item.key}">审核通过</button></div></article>`).join("")}</div>` : `<div class="empty"><strong>当前无待审核内容</strong><span>新的素材与话术提交后会进入此处。</span></div>`}`;
    }

    function renderAssets() {
      if (!$("#assetContent")) return;
      const titles = {
        packs: "素材包视图",
        grid: "网格视图",
        list: "列表视图"
      };
      $("#assetViewTitle").textContent = activeAssetModule === "collections" ? "素材包"
        : activeAssetModule === "recycle" ? "回收站"
          : titles[assetViewMode] || "素材库";
      $("#assetViewDesc").textContent = activeAssetModule === "collections" ? "按业务专题管理图片、视频、文案与文件；打开素材包即可查看完整构成和引用关系。"
        : activeAssetModule === "recycle" ? "集中管理已归档素材，可核对内容后恢复或执行彻底删除。"
          : assetViewMode === "list" ? "适合批量管理素材状态、标签、创建人和引用关系。"
            : "适合浏览图片、视频和视觉素材。";
      $("#assetCountAll").textContent = assets.filter((asset) => asset.status !== "已归档").length;
      $("#assetContent").innerHTML = assetViewMode === "packs" ? renderAssetPackView()
        : assetViewMode === "list" ? renderAssetListView()
          : renderAssetGridView();
      renderAssetFilters();
      renderAssetDetail();
      renderAssetPackageDetail();
      renderAssetBatchbar();
      renderContentCompliance();
      $$("[data-asset-type]").forEach((button) => button.classList.toggle("active", button.dataset.assetType === assetTypeFilter));
      $$("[data-asset-status]").forEach((button) => button.classList.toggle("active", button.dataset.assetStatus === assetStatusFilter));
      $$("[data-asset-scope]").forEach((button) => button.classList.toggle("active", button.dataset.assetScope === assetScopeFilter));
      $$("[data-asset-dir]").forEach((button) => button.classList.toggle("active", button.dataset.assetDir === assetDirFilter));
      $$("[data-asset-view]").forEach((button) => button.classList.toggle("active", button.dataset.assetView === assetViewMode));
      refreshAssistantMini();
    }

    function assetIcon(type) {
      return type === "图片" ? "icon-park-outline:pic"
        : type === "视频" ? "icon-park-outline:play"
          : type === "文本" ? "icon-park-outline:doc-detail"
            : "icon-park-outline:protect";
    }

    function assetThumb(asset) {
      return asset.image
        ? `<img src="${asset.image}" alt="${asset.title}">`
        : `<iconify-icon icon="${asset.icon || assetIcon(asset.type)}"></iconify-icon>`;
    }

    function inferUploadType(file) {
      if (!file) return $("#uploadTypeInput")?.value || "图片";
      if (file.type.startsWith("video/")) return "视频";
      if (file.type.startsWith("image/")) return "图片";
      return "文件";
    }

    function availableUploadTags() {
      const assetTags = assets.flatMap((asset) => asset.tags || []);
      return Array.from(new Set([
        "节日营销", "项目科普", "复购提醒", "术后关怀",
        "皮肤管理", "水光复购", "光电抗衰", "老客", "高意向",
        "朋友圈", "群发", "会话", ...assetTags
      ]));
    }

    function renderUploadTags() {
      const list = $("#uploadTagList");
      const options = $("#uploadTagOptions");
      if (!list || !options) return;
      const keyword = ($("#uploadTagSearch")?.value || "").trim();
      list.innerHTML = `${Array.from(uploadTagSelection).map((tag) => `
        <button class="chip ${chipClass(tag)} upload-tag-pill" type="button" data-upload-tag-remove="${escapeHtml(tag)}" title="移除标签">
          ${escapeHtml(tag)}<iconify-icon icon="icon-park-outline:close"></iconify-icon>
        </button>
      `).join("")}
        <button class="chip neutral upload-tag-add" type="button" id="toggleUploadTagPicker"><iconify-icon icon="icon-park-outline:plus"></iconify-icon>添加标签</button>`;
      const visibleTags = availableUploadTags().filter((tag) => !keyword || tag.includes(keyword));
      options.innerHTML = visibleTags.length
        ? visibleTags.map((tag) => `
          <button class="upload-tag-option ${uploadTagSelection.has(tag) ? "active" : ""}" type="button" data-upload-tag-option="${escapeHtml(tag)}">${escapeHtml(tag)}</button>
        `).join("")
        : `<span class="table-meta">未找到匹配标签，可点击“新建并添加”。</span>`;
    }

    function addUploadTagFromInput() {
      const input = $("#uploadTagSearch");
      const value = input.value.trim();
      if (!value) {
        showToast("请输入要添加的标签名称");
        input.focus();
        return;
      }
      uploadTagSelection.add(value);
      input.value = "";
      renderUploadTags();
      showToast(`已添加标签：${value}`);
    }

    function resetUploadForm(context = "library") {
      uploadContext = context;
      selectedUploadFile = null;
      uploadTagSelection = new Set(context === "broadcast" ? ["群发", "复购提醒"] : ["节日营销", "皮肤管理"]);
      $("#uploadTitleInput").value = context === "broadcast" ? "新上传群发素材" : "七夕焕肤活动海报";
      $("#uploadTypeInput").value = "图片";
      $("#uploadDirInput").value = context === "broadcast" ? "复购提醒" : "节日营销";
      $("#uploadFileInput").value = "";
      $("#uploadTagSearch").value = "";
      $("#uploadTagPicker").hidden = true;
      $("#uploadFileStatus").textContent = context === "broadcast"
        ? "请选择要随群发发送的图片或视频，上传后会同步进入素材库。"
        : "支持 JPG/PNG/GIF ≤10MB，MP4 ≤50MB，PDF/Word/PPT ≤20MB";
      renderUploadTags();
    }

    function createUploadedAsset() {
      const file = selectedUploadFile;
      const type = inferUploadType(file);
      const rawTitle = $("#uploadTitleInput").value.trim();
      const title = rawTitle && rawTitle !== "新上传群发素材"
        ? rawTitle
        : (file ? file.name.replace(/\.[^.]+$/, "") : "未命名素材");
      const dir = $("#uploadDirInput").value;
      const asset = {
        title,
        type,
        dir,
        project: dir === "项目科普" ? "光电抗衰" : dir === "复购提醒" ? "水光项目" : "皮肤管理",
        channel: uploadContext === "broadcast" ? "群发" : "素材库",
        status: "待审核",
        creator: currentAccount().name,
        updated: "刚刚",
        size: file ? (type === "视频" ? "待识别时长" : `${Math.max(1, Math.round(file.size / 1024))}KB`) : "待补充",
        package: dir === "复购提醒" ? "水光复购运营包" : "新上传素材",
        tags: uploadTagSelection.size ? Array.from(uploadTagSelection) : [dir, type],
        refs: ["素材库上传记录"],
        uses: 0,
        icon: assetIcon(type)
      };
      if (file && type === "图片") asset.image = URL.createObjectURL(file);
      assets.unshift(asset);
      return asset;
    }

    function renderBroadcastAssetPicker() {
      const selected = Array.from(selectedBroadcastAssets)
        .map((title) => assets.find((asset) => asset.title === title))
        .filter(Boolean);
      if ($("#broadcastSelectedAssets")) {
        $("#broadcastSelectedAssets").innerHTML = selected.length
          ? selected.map((asset) => `<span class="chip ${chipClass(asset.title)}">${asset.title}</span>`).join("")
          : `<span class="table-meta">暂未选择素材，可选择下方素材或上传图片/视频。</span>`;
      }
      if ($("#broadcastAssetHint")) {
        $("#broadcastAssetHint").textContent = selected.length
          ? `已选 ${selected.length} 个素材：${selected.map((asset) => asset.title).join("、")}`
          : "可从素材库选择，或上传图片/视频后同步入库。";
      }
      if ($("#broadcastAssetChoices")) {
        $("#broadcastAssetChoices").innerHTML = assets
          .filter((asset) => ["图片", "视频", "文本"].includes(asset.type))
          .slice(0, 6)
          .map((asset) => `
            <button class="asset-choice-card ${selectedBroadcastAssets.has(asset.title) ? "active" : ""}" data-toggle-broadcast-asset="${asset.title}" type="button">
              <span class="asset-choice-icon">${assetThumb(asset)}</span>
              <span>
                <strong>${asset.title}</strong>
                <span class="table-meta">${asset.type} · ${asset.dir}</span>
              </span>
            </button>
          `).join("");
      }
    }

    function formatBroadcastTime(value) {
      return (value || "2026-07-15T14:30").replace("T", " ");
    }

    function setBroadcastTime(value) {
      $("#broadcastTimeInput").value = value;
      broadcastSendType = "定时单次";
      $$("[data-send-type]").forEach((item) => item.classList.toggle("active", item.dataset.sendType === broadcastSendType));
      renderBroadcastWizard();
    }

    function currentThread() {
      return conversationThreads.find((thread) => thread.id === activeThreadId) || conversationThreads[0];
    }

    function avatarForThread(thread) {
      return thread.type === "群聊" ? avatarAssets.group : avatarAssets.customer;
    }

    function avatarForMessage(thread, message) {
      if (message.role === "staff") return avatarAssets.staff;
      return thread.type === "群聊" ? avatarAssets.group : avatarAssets.customer;
    }

    function threadAiRecommendations(thread) {
      if (thread.status === "风险" || thread.side.risk === "高" || thread.tags.includes("客诉敏感")) {
        return [
          { key: "risk-summary", label: "查看 AI 风险摘要", icon: "icon-park-outline:attention" }
        ];
      }
      if (thread.type === "群聊") {
        return [
          { key: "group-faq", label: "生成群答疑", icon: "icon-park-outline:comment" },
          { key: "broadcast", label: "生成群发", icon: "icon-park-outline:send-one" },
          { key: "group-tags", label: "推荐群标签", icon: "icon-park-outline:tag-one" }
        ];
      }
      if (thread.tags.includes("水光复购") || thread.side.project.includes("复购")) {
        return [
          { key: "repurchase-reply", label: "复购权益回复", icon: "icon-park-outline:message-sent" },
          { key: "schedule", label: "预约档期话术", icon: "icon-park-outline:calendar" },
          { key: "broadcast", label: "生成复购群发", icon: "icon-park-outline:send-one" }
        ];
      }
      if (thread.tags.some((tag) => tag.includes("高意向") || tag.includes("皮肤管理"))) {
        return [
          { key: "consult-reply", label: "检测引导回复", icon: "icon-park-outline:message-sent" },
          { key: "add-tags", label: "补充意向标签", icon: "icon-park-outline:tag-one" },
          { key: "follow-up", label: "添加跟进", icon: "icon-park-outline:notes" }
        ];
      }
      return [
        { key: "smart-reply", label: "生成回复", icon: "icon-park-outline:message-sent" },
        { key: "add-tags", label: "推荐标签", icon: "icon-park-outline:tag-one" },
        { key: "todo", label: "转待办", icon: "icon-park-outline:alarm" }
      ];
    }

    function renderAiReplyActions(thread) {
      const actions = threadAiRecommendations(thread);
      $("#aiReplyActions").innerHTML = `
        <div class="ai-action-row">
          ${actions.map((item) => `
            <button class="btn small ai-reply-action ${item.tone || ""}" data-thread-ai-action="${item.key}">
              <iconify-icon icon="${item.icon}"></iconify-icon>${item.label}
            </button>
          `).join("")}
        </div>
      `;
    }

    function applyThreadAiAction(action) {
      const thread = currentThread();
      const name = thread.type === "群聊" ? "各位" : `${thread.title}您好`;
      if (action === "risk-reply") {
        $("#replyInput").value = `${thread.title}您好，我理解您现在比较担心。已同步门店顾问优先复核，30 分钟内会电话确认恢复情况；在此之前请先避免热敷、暴晒和刺激性护肤。`;
        updateAssistantOutput("已生成安抚回复", "根据当前风险会话生成了安抚、解释和回访承诺口径，可直接检查后发送。", ["风险优先", "术后回访"]);
        showToast("AI 已生成风险安抚回复");
        return;
      }
      if (action === "risk-summary") {
        updateAssistantOutput("当前会话风险摘要", `${thread.title}提到「${thread.summary}」，风险等级 ${thread.side.risk}；建议先安抚情绪，再转门店顾问电话确认，并记录处置结果。`, ["风险摘要", thread.side.project]);
        openAssistant();
        showToast("AI 已生成当前会话风险摘要");
        return;
      }
      if (action === "todo" || action === "follow-up") {
        todos.unshift({ title: `${thread.title} 跟进`, desc: `${thread.side.project}，30 分钟内补充回复`, tag: thread.side.risk === "无" ? "中" : thread.side.risk, type: "去处理" });
        renderTodos();
        showToast("已根据当前会话生成待办");
        return;
      }
      if (action === "group-faq") {
        $("#replyInput").value = `${name}下午好，关于${thread.side.project}，敏感肌建议先做皮肤检测，再由顾问确认适合的护理方案；需要预约的可以回复姓名和到店时间。`;
        updateAssistantOutput("已生成群答疑", "已基于当前群聊问题生成活动 FAQ 回复，可直接发送到群聊。", ["群答疑", thread.side.project]);
        showToast("AI 已生成群聊答疑");
        return;
      }
      if (action === "group-tags" || action === "add-tags") {
        tagMode = thread.type === "群聊" ? "batch" : "single";
        tagSelection = new Set(thread.type === "群聊" ? ["活动群", "咨询群"] : ["高意向咨询", thread.side.project]);
        $("#tagSearchInput").value = "";
        renderTagSelection();
        openModal("#tagModal");
        showToast("AI 已按当前会话推荐标签");
        return;
      }
      if (action === "repurchase-reply") {
        $("#replyInput").value = `${thread.title}您好，本月还有老客复购权益，可以保留上次水光方案，并赠送一次皮肤检测。我可以先帮您看本周门店档期，确认后再预约。`;
        updateAssistantOutput("已生成复购回复", "已结合老客与水光复购标签生成权益说明和预约引导。", ["水光复购", "老客"]);
        showToast("AI 已生成复购权益回复");
        return;
      }
      if (action === "schedule") {
        $("#replyInput").value = `${thread.title}您好，本周三/周五下午还有可预约档期，我可以先帮您锁定一个顾问沟通时间，再根据皮肤状态确认方案。`;
        showToast("AI 已生成预约档期话术");
        return;
      }
      if (action === "consult-reply") {
        $("#replyInput").value = `${thread.title}您好，结合您描述的皮肤状态，建议先做一次皮肤检测，再由顾问根据检测结果确认修护方案，我可以帮您预约一对一沟通。`;
        showToast("AI 已生成检测引导回复");
        return;
      }
      if (action === "broadcast") {
        runAssistantAction("broadcast");
        return;
      }
      $("#replyInput").value = `${name}，我先根据您的情况同步顾问确认，稍后给您更准确的方案建议。`;
      showToast("AI 已生成当前会话回复");
    }

    function setConversationAiStatus(status) {
      conversationAiStatus = status;
      const node = $("#conversationAiStatus");
      if (!node) return;
      node.textContent = status;
      node.classList.toggle("pending", status !== "已人工确认发送" && status !== "已读");
    }

    function handleConversationAiAction(action) {
      const thread = currentThread();
      if (action === "read") {
        thread.read = true;
        setConversationAiStatus("已读");
        showToast("会话已标记为已读");
        return;
      }
      if (action === "generate") {
        const nextAction = thread.side.risk === "高" ? "risk-reply" : thread.type === "群聊" ? "group-faq" : "smart-reply";
        applyThreadAiAction(nextAction);
        setConversationAiStatus("待人工确认");
        return;
      }
      if (action === "review") {
        conversationAiReview = thread.side.risk === "高"
          ? "已识别高风险术后诉求：建议确认安抚回复已发送，并在 30 分钟内完成门店回访记录。"
          : "本轮会话已形成明确回复方向；发送后建议补充客户标签和下一次跟进时间。";
        const panel = $("#conversationAiReview");
        if (panel) {
          panel.hidden = false;
          panel.innerHTML = `<strong>AI 复盘</strong><span>${conversationAiReview}</span>`;
        }
        showToast("AI 复盘已生成");
        return;
      }
      if (action === "escalate") {
        todos.unshift({ title: `${thread.title} 人工接管`, desc: `${thread.side.project} · 需优先人工跟进`, tag: "高", type: "去处理" });
        renderTodos();
        showToast("已升级至人工接管队列");
        return;
      }
      if (action === "reject") {
        $("#replyInput").value = "";
        setConversationAiStatus("建议已驳回");
        showToast("已清空 AI 建议，可手动编辑或重新生成");
      }
    }

    function renderConversationThread() {
      const thread = currentThread();
      if (!$("#threadList")) return;
      const keyword = ($("#conversationSearch")?.value || "").trim().toLowerCase();
      const threadRows = conversationThreads.filter((item) => {
        const keywordText = `${item.title} ${item.summary} ${item.meta} ${item.tags.join(" ")}`.toLowerCase();
        if (keyword && !keywordText.includes(keyword)) return false;
        if (conversationFilter === "群聊") return item.type === "群聊";
        if (conversationFilter === "风险会话") return item.status === "风险";
        if (conversationFilter === "已处理") return item.status === "已回复" || item.status === "已处理";
        return true;
      });
      $("#threadList").innerHTML = threadRows.length ? threadRows.map((item) => `
        <button class="thread-item ${item.id === activeThreadId ? "active" : ""}" data-thread-id="${item.id}">
          <img class="thread-avatar ${item.type === "群聊" ? "group" : ""}" src="${avatarForThread(item)}" alt="${item.title}头像" />
          <div class="thread-copy">
            <strong>${item.title}<span class="chip ${item.status === "风险" ? "red" : item.type === "群聊" ? "rose" : ""}">${item.status === "风险" ? "风险" : item.type}</span></strong>
            <span>${item.summary}</span>
            <span>${item.meta}</span>
          </div>
        </button>
      `).join("") : `<div class="empty"><strong>暂无${conversationFilter}</strong><span>可切换会话筛选或同步企微会话。</span></div>`;
      $$("[data-conversation-filter]").forEach((button) => button.classList.toggle("active", button.dataset.conversationFilter === conversationFilter));
      const riskValue = thread.side.risk || "无";
      const riskText = riskValue === "无" ? "无风险" : `${riskValue}风险`;
      const urgencyText = riskValue === "高" ? "高" : riskValue === "中" ? "中" : "常规";
      const riskClass = riskValue === "高" ? "red" : riskValue === "中" ? "amber" : "";
      const urgencyClass = riskValue === "高" ? "red" : riskValue === "中" ? "amber" : "";
      const summaryAction = riskValue === "高"
        ? "建议优先安抚并同步门店顾问，30 分钟内回访。"
        : riskValue === "中"
          ? "建议补充跟进备注，并在 2 小时内确认客户状态。"
          : thread.type === "群聊"
            ? "建议生成群答疑口径，统一回复高频问题并沉淀群标签。"
            : "建议根据项目意向补充标签，并引导预约顾问沟通。";
      $("#threadAvatar").src = avatarForThread(thread);
      $("#threadAvatar").classList.toggle("group", thread.type === "群聊");
      $("#threadAvatar").alt = `${thread.title}头像`;
      $("#threadTitle").textContent = thread.title;
      $("#threadMeta").textContent = thread.meta;
      $("#threadTypeText").textContent = `${thread.type} · ${thread.side.project}`;
      $("#threadRiskChip").textContent = riskText;
      $("#threadRiskChip").className = `chip ${riskClass}`;
      $("#threadUrgencyChip").textContent = urgencyText;
      $("#threadUrgencyChip").className = `chip ${urgencyClass}`;
      $("#threadAiSummary").textContent = `AI 总结：${thread.summary}，${summaryAction}`;
      $("#threadTags").innerHTML = thread.tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("");
      $("#messageList").innerHTML = thread.messages.map((message) => `
        <div class="message ${message.role === "staff" ? "right" : ""}">
          <img class="message-avatar" src="${avatarForMessage(thread, message)}" alt="${message.from}头像" />
          <div class="message-stack">
            <span class="table-meta">${message.time} ${message.from}</span>
            <div class="bubble">${message.text}</div>
          </div>
        </div>
      `).join("");
      $("#conversationOverviewTab").textContent = thread.type === "群聊" ? "群聊概览" : "客户概览";
      const conversationCustomer = thread.type === "单客" ? customers.find((customer) => customer.name === thread.title) : null;
      const lastMessage = thread.messages[thread.messages.length - 1];
      const followups = conversationCustomer?.followups || [];
      $("#conversationOverviewPane").innerHTML = `
        <div class="conversation-info-card">
          <div class="thread-side-title">
            <strong>${thread.type === "群聊" ? "群聊概览" : "客户概览"}</strong>
            ${thread.type === "单客" ? `<button class="btn small ghost" data-open-customer-from-thread>查看客户详情</button>` : `<span class="chip rose">群聊</span>`}
          </div>
          <div class="conversation-info-row"><span>${thread.type === "群聊" ? "群来源" : "客户来源"}</span><strong>${thread.side.source}</strong></div>
          <div class="conversation-info-row"><span>归属员工</span><strong>${conversationCustomer?.owner || thread.owner || "未分配"}</strong></div>
          <div class="conversation-info-row"><span>${thread.type === "群聊" ? "当前主题" : "关注项目"}</span><strong>${thread.side.project}</strong></div>
          <div class="conversation-info-row"><span>当前状态</span><strong>${conversationCustomer?.status || thread.status || "待跟进"}</strong></div>
          <div class="conversation-info-row"><span>最近联系</span><strong>${conversationCustomer?.time || lastMessage?.time || "暂无记录"}</strong></div>
          <div class="conversation-info-row"><span>关键标签</span><div class="tag-wrap">${thread.tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div></div>
          <div class="conversation-info-row"><span>风险等级</span><strong><span class="chip ${riskClass}">${riskText}</span></strong></div>
          <div class="conversation-info-row"><span>建议动作</span><strong>${thread.side.note}</strong></div>
        </div>`;
      const dispositionChoice = thread.dispositionChoice || "processed";
      const dispositionHistory = thread.dispositionHistory || [];
      $("#conversationDispositionPane").innerHTML = `
        <div class="conversation-info-card">
          <div class="thread-side-title"><strong>处理结果与跟进</strong><span class="chip">${dispositionHistory.length} 条记录</span></div>
          <div class="risk-actions">
            <button type="button" class="choice ${dispositionChoice === "processed" ? "active" : ""}" data-disposition-choice="processed">已处理</button>
            <button type="button" class="choice ${dispositionChoice === "ignored" ? "active" : ""}" data-disposition-choice="ignored">无需跟进</button>
          </div>
          <div class="form-row">
            <label>处理备注</label>
            <textarea class="textarea" id="riskNote" maxlength="200" placeholder="记录本次处理结果和后续安排">${escapeHtml(thread.lastDispositionNote || "")}</textarea>
          </div>
          <span class="risk-note-footer">0 / 200</span>
          <div class="actions">
            ${conversationCustomer ? `<button class="btn" type="button" data-open-thread-follow>添加跟进</button>` : ""}
            <button class="btn primary risk-submit" id="disposeRisk">保存处理结果</button>
          </div>
          ${(dispositionHistory.length || followups.length) ? `
            <div class="conversation-history">
              <div class="thread-side-title"><strong>最近跟进记录</strong></div>
              ${dispositionHistory.slice(0, 3).map((item) => `
                <div class="conversation-history-item">
                  <span class="chip ${item.choice === "误报 / 忽略" ? "" : "green"}">${item.choice}</span>
                  <span><strong>${escapeHtml(item.note || "未填写备注")}</strong></span>
                  <span>${escapeHtml(item.time)} · ${escapeHtml(item.operator)}</span>
                </div>
              `).join("")}
              ${followups.slice(0, 3).map((item) => `
                <div class="conversation-history-item">
                  <span class="chip green">${escapeHtml(item.type)}</span>
                  <span><strong>${escapeHtml(item.note || "已创建跟进")}</strong></span>
                  <span>${escapeHtml(item.time)}</span>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      `;
      const riskNote = $("#riskNote");
      if (riskNote) {
        const footer = riskNote.closest(".conversation-info-card")?.querySelector(".risk-note-footer");
        if (footer) footer.textContent = `${riskNote.value.length} / 200`;
      }
      $("#replyInput").value = thread.type === "群聊"
        ? "各位下午好，敏感肌建议先做皮肤检测，我们可以帮大家安排顾问一对一确认。"
        : "您好，我已帮您同步给门店顾问，会在 30 分钟内电话联系您。";
      setConversationAiStatus(conversationAiStatus);
      const reviewPanel = $("#conversationAiReview");
      if (reviewPanel) {
        reviewPanel.hidden = !conversationAiReview;
        reviewPanel.innerHTML = conversationAiReview ? `<strong>AI 复盘</strong><span>${conversationAiReview}</span>` : "";
      }
      renderAiReplyActions(thread);
      setConversationDetailTab(conversationDetailTab, false);
      refreshAssistantMini();
    }

    function setConversationDetailTab(tab, announce = true) {
      const nextTab = ["record", "overview", "disposition"].includes(tab) ? tab : "record";
      conversationDetailTab = nextTab;
      $$('[data-conversation-detail-tab]').forEach((button) => {
        const active = button.dataset.conversationDetailTab === nextTab;
        button.classList.toggle("active", active);
        button.setAttribute("aria-selected", String(active));
      });
      $$('[data-conversation-detail-pane]').forEach((pane) => {
        pane.classList.toggle("active", pane.dataset.conversationDetailPane === nextTab);
      });
      const recordButton = $('[data-show-conversation-record]');
      if (recordButton) recordButton.hidden = nextTab !== "record";
      if (announce) {
        const labels = { record: "会话记录", overview: currentThread().type === "群聊" ? "群聊概览" : "客户概览", disposition: "处理结果与跟进" };
        showToast(`已切换到${labels[nextTab]}`);
      }
    }

    function openThread(threadId) {
      const group = groups.find((item) => item.id === threadId);
      if (group && !conversationThreads.some((item) => item.id === threadId)) {
        conversationThreads.push({
          id: group.id,
          type: "群聊",
          title: group.name,
          meta: `群聊 · ${group.members} 人 · 群主 ${group.owner}`,
          tags: [group.tag, group.meta],
          status: "待回复",
          owner: group.owner,
          summary: group.notice || "群内咨询待运营人员回复",
          side: { source: groupTypeLabel(group), project: group.meta, risk: "无", note: "可按群公告与项目标准口径回复" },
          messages: [{ from: "群成员", role: "customer", time: group.active, text: "请问本周的项目权益和预约时间还有吗？" }]
        });
      }
      activeThreadId = threadId || "c1";
      conversationDetailTab = "record";
      activateScreen("customers");
      const conversationButton = document.querySelector('#screen-customers .subnav-button[data-subtarget="conversations"]');
      if (conversationButton) switchSubscreen(conversationButton);
      renderConversationThread();
      showToast("已打开会话，可直接查看并回复");
    }

    function openCustomerThread(index) {
      const customer = customers[index] || customers[0];
      const threadId = `customer-${index}`;
      let thread = conversationThreads.find((item) => item.id === threadId || item.title === customer.name);
      if (!thread) {
        thread = {
          id: threadId,
          type: "单客",
          title: customer.name,
          meta: `单客会话 · ${customer.tags[0]} · 归属员工 ${customer.owner}`,
          tags: [...customer.tags],
          status: customer.status.includes("沉默") ? "待回复" : "已回复",
          owner: customer.owner,
          summary: `最近需求：${customer.tags.join(" / ")}`,
          side: {
            source: "企微渠道活码",
            project: customer.tags[0],
            risk: customer.status.includes("沉默") ? "中" : "无",
            note: customer.status.includes("沉默") ? "建议先发权益提醒并安排人工跟进。" : "可根据需求标签继续补充项目方案。"
          },
          messages: [
            { from: customer.name, role: "customer", time: `${customer.time} ${customer.time.includes(":") ? "" : "10:20"}`.trim(), text: `你好，我想了解一下${customer.tags[0]}相关方案。` },
            { from: customer.owner, role: "staff", time: "07-10 10:26", text: "您好，我可以先根据您的肤质和项目意向发一份方案，您看完后我再帮您预约顾问确认。" }
          ]
        };
        conversationThreads.unshift(thread);
      }
      openThread(thread.id);
    }

    function sendThreadReply() {
      const thread = currentThread();
      const text = $("#replyInput").value.trim();
      if (!text) {
        showToast("请输入回复内容");
        return;
      }
      thread.messages.push({
        from: currentAccount().name,
        role: "staff",
        time: "07-10 15:08",
        text
      });
      thread.status = "已回复";
      setConversationAiStatus("已人工确认发送");
      renderConversationThread();
      markOperationFeedback("#messageList .message:last-child");
      showToast(thread.type === "群聊" ? "群聊回复已发送" : "客户会话回复已发送");
    }

    function renderBroadcastTagSelector() {
      const input = $("#broadcastTagInput");
      if (!input) return;
      const tags = input.value.split("、").filter(Boolean);
      const selection = $("#broadcastTagSelection");
      if (selection) selection.innerHTML = tags.map((tag) => `<span class="broadcast-tag-chip">${tag}<button type="button" data-remove-broadcast-tag="${tag}" aria-label="移除${tag}"><iconify-icon icon="icon-park-outline:close"></iconify-icon></button></span>`).join("") || '<span class="broadcast-tag-empty">请选择标签</span>';
      $$('[data-broadcast-tag]').forEach((checkbox) => { checkbox.checked = tags.includes(checkbox.dataset.broadcastTag); });
    }

    function renderBroadcastWizard() {
      if (broadcastStep !== 1 && $("#broadcastTagMenu")) $("#broadcastTagMenu").hidden = true;
      $$("[data-wizard-step-label]").forEach((label) => {
        label.classList.toggle("active", Number(label.dataset.wizardStepLabel) <= broadcastStep);
      });
      $$("[data-wizard-pane]").forEach((pane) => {
        pane.classList.toggle("active", Number(pane.dataset.wizardPane) === broadcastStep);
      });
      $("#broadcastPrev").style.visibility = broadcastStep === 1 ? "hidden" : "visible";
      $("#submitWizard").textContent = broadcastStep === 3 ? "提交审批" : "下一步";
      const title = $("#broadcastTitleInput")?.value || "七夕皮肤管理复购提醒";
      const tag = $("#broadcastTagInput")?.value || "水光复购";
      const time = formatBroadcastTime($("#broadcastTimeInput")?.value);
      const assetText = Array.from(selectedBroadcastAssets).join("、") || "未选择素材";
      const selectedTargetText = broadcastSource === "selected-customers" ? `已选 ${checkedCustomerIndexes.size} 位客户` : broadcastSource === "selected-groups" ? `已选 ${checkedGroupIds.size} 个客户群` : `按${broadcastTargetType === "客户群" ? "客户群" : "客户"}筛选「${tag}」`;
      const hasSelectedTargets = broadcastSource === "selected-customers" || broadcastSource === "selected-groups";
      ["#broadcastTargetTypeRow", "#broadcastTargetFilterRow", "#broadcastTargetEstimate"].forEach((selector) => {
        const node = $(selector); if (node) node.hidden = hasSelectedTargets;
      });
      if ($("#broadcastTimeInput")) $("#broadcastTimeInput").disabled = broadcastSendType === "立即发送";
      $$('[data-send-type]').forEach((card) => card.classList.toggle("active", card.dataset.sendType === broadcastSendType));
      $$('[data-execution-mode]').forEach((button) => button.classList.toggle("active", button.dataset.executionMode === broadcastExecutionMode));
      const content = $("#broadcastContentInput")?.value || "";
      renderBroadcastTagSelector();
      if ($("#broadcastContentGuard")) $("#broadcastContentGuard").textContent = "支持变量：{客户姓名}、{消费项目}、{到店时间}；内容可直接进入下一步预览发送效果。";
      if ($("#broadcastMessagePreview")) $("#broadcastMessagePreview").textContent = content.replaceAll("{客户姓名}", "张女士").replaceAll("{消费项目}", "水光项目").replaceAll("{到店时间}", "本周六 14:00");
      if ($("#broadcastPreviewTitle")) $("#broadcastPreviewTitle").textContent = broadcastTargetType === "客户群" ? "客户群聊预览" : "客户私聊预览";
      const previewImage = assets.find((asset) => selectedBroadcastAssets.has(asset.title) && asset.type === "图片" && asset.image);
      if ($("#broadcastMediaPreview")) {
        $("#broadcastMediaPreview").hidden = !previewImage;
        $("#broadcastMediaPreview").innerHTML = previewImage ? `<img src="${previewImage.image}" alt="${previewImage.title}"><span>${previewImage.title}</span>` : "";
      }
      renderBroadcastAssetPicker();
      const recipients = (broadcastSource === "selected-customers" || (broadcastFilterMode === "manual" && broadcastTargetType === "潜客"))
        ? Array.from(checkedCustomerIndexes).map((index) => customers[index]).filter(Boolean).map((item) => ({ name: item.name, meta: item.tags.join(" · ") }))
        : (broadcastSource === "selected-groups" || (broadcastFilterMode === "manual" && broadcastTargetType === "客户群"))
          ? Array.from(checkedGroupIds).map((id) => groups.find((item) => item.id === id)).filter(Boolean).map((item) => ({ name: item.name, meta: `${item.members} 人 · 群主 ${item.owner}` }))
          : [];
      if ($("#broadcastSelectionTitle")) $("#broadcastSelectionTitle").textContent = (broadcastSource === "selected-groups" || (broadcastFilterMode === "manual" && broadcastTargetType === "客户群")) ? "手动勾选客户群" : (broadcastSource === "selected-customers" || broadcastFilterMode === "manual") ? "手动勾选客户" : "按标签筛选客户";
      if ($("#broadcastSelectionCount")) $("#broadcastSelectionCount").textContent = recipients.length ? `${recipients.length} 个对象` : "智能筛选";
      if ($("#broadcastRecipientList")) $("#broadcastRecipientList").innerHTML = recipients.length ? recipients.slice(0, 5).map((item) => `<div><strong>${item.name}</strong><span>${item.meta}</span></div>`).join("") + (recipients.length > 5 ? `<span class="table-meta">另有 ${recipients.length - 5} 个对象已选</span>` : "") : `<span class="table-meta">切换到勾选群发后，这里会展示已选对象，可返回列表调整。</span>`;
      if ($("#broadcastConfirmText")) {
        const timeText = broadcastSendType === "立即发送" ? "立即发送" : `定时单次 ${time}`;
        $("#broadcastConfirmText").textContent = `${title} · ${selectedTargetText} · 素材：${assetText} · ${timeText} · 执行方式：${broadcastExecutionMode}`;
      }
    }

    function resetBroadcastWizard() {
      broadcastStep = 1;
      broadcastTargetType = broadcastSource === "selected-groups" ? "客户群" : "潜客";
      broadcastSendType = "定时单次";
      broadcastFilterMode = "smart";
      broadcastExecutionMode = "管理员直发";
      broadcastOperators = new Set(["李运营", "王专员", "赵运营"]);
      selectedBroadcastAssets = new Set(["水光复购文案", "七夕焕肤海报"]);
      renderBroadcastWizard();
      $$("[data-target-type]").forEach((item) => item.classList.toggle("active", item.dataset.targetType === broadcastTargetType));
      $$("[data-broadcast-filter-mode]").forEach((item) => item.classList.toggle("active", item.dataset.broadcastFilterMode === broadcastFilterMode));
      $$("[data-send-type]").forEach((item) => item.classList.toggle("active", item.dataset.sendType === broadcastSendType));
      $$("[data-operator-choice]").forEach((item) => item.classList.toggle("active", broadcastOperators.has(item.dataset.operatorChoice)));
    }

    let pendingBroadcastId = "";
    function taskFromWizard() {
      const tag = $("#broadcastTagInput").value;
      const manual = broadcastFilterMode === "manual";
      const target = (broadcastSource === "selected-customers" || (manual && broadcastTargetType === "潜客")) ? checkedCustomerIndexes.size : (broadcastSource === "selected-groups" || (manual && broadcastTargetType === "客户群")) ? checkedGroupIds.size : (tag === "水光复购" ? 1250 : tag === "高意向咨询" ? 860 : 520);
      const targetType = broadcastSource === "selected-groups" || broadcastTargetType === "客户群" ? "客户群" : "客户";
      const time = broadcastSendType === "立即发送" ? "立即" : formatBroadcastTime($("#broadcastTimeInput").value);
      return normalizeBroadcast({ id: `broadcast-${Date.now()}`, title: $("#broadcastTitleInput").value.trim() || "未命名群发任务", target, success: 0, fail: 0, status: "草稿", creator: currentAccount().name, time, targetType, sendMode: broadcastSendType, executionMode: broadcastExecutionMode, interval: $("#broadcastIntervalInput").value, tag: broadcastSource === "selected-groups" ? "已选客户群" : tag, operators: Array.from(broadcastOperators), assets: Array.from(selectedBroadcastAssets), campaign: $("#broadcastCampaignInput").value, note: $("#broadcastNoteInput").value.trim(), content: $("#broadcastContentInput").value.trim(), recipients: targetType === "客户群" ? Array.from(checkedGroupIds).map((id) => ({ id, name: groups.find((g) => g.id === id)?.name || "客户群", issue: "" })) : [] }, broadcasts.length + 1);
    }
    function evaluateBroadcastRisk(task) {
      const frequent = task.targetType === "客户" ? Math.min(38, Math.round(task.target * .03)) : Math.min(3, Math.round(task.target * .08));
      const p0 = task.tag === "术后回访" || task.targetType === "客户";
      const exclude = $("#broadcastRiskExclude")?.checked !== false;
      task.riskResult = { checkedAt: broadcastNow(), items: [
        { name: "频控", level: frequent ? "已排除近 7 天触达" : "通过", affected: frequent },
        { name: "P0 客诉冲突", level: p0 ? (exclude ? "需二次确认，已排除风险对象" : "需二次确认") : "通过", affected: p0 ? 1 : 0 },
        { name: "高风险人群", level: exclude ? "已排除" : "保留，需确认", affected: exclude ? (p0 ? 1 : 0) : 0 }
      ] };
      return { hard: false, confirm: p0 || !exclude, task };
    }
    function renderBroadcastRiskModal(result) {
      pendingBroadcastId = result.task.id;
      $("#broadcastActionTitle").textContent = result.hard ? "风控拦截" : "提交审批前风险确认";
      $("#broadcastActionBody").innerHTML = `<div class="workflow-summary"><strong>${result.task.title}</strong><span>已执行频控、P0 客诉与高风险人群检查。</span></div><ul class="broadcast-history">${result.task.riskResult.items.map((item) => `<li><strong>${item.name}</strong><span>${item.level} · 影响 ${item.affected} 个</span></li>`).join("")}</ul>${result.confirm ? `<label class="check-line"><input type="checkbox" id="broadcastRiskConfirm">我已确认 P0 / 频控风险处理结果并同意继续提交</label>` : ""}`;
      $("#broadcastActionConfirm").textContent = "确认提交审批";
      $("#broadcastActionConfirm").dataset.broadcastRiskConfirm = "submit";
      openModal("#broadcastActionModal");
    }
    function createBroadcastTask(source = "submit") {
      const task = taskFromWizard(); broadcasts.unshift(task); selectedBroadcastIndex = 0;
      if (source === "save") { task.operationLog.unshift({ action: "保存草稿", from: "", to: "草稿", note: "尚未发起风控与审批", operator: currentAccount().name, time: broadcastNow() }); renderBroadcasts(); closeModals(); activateScreen("marketing"); recordOperation("保存群发草稿", task.title, `${task.target} 个目标`); return; }
      const result = evaluateBroadcastRisk(task); renderBroadcastRiskModal(result); renderBroadcasts(); closeModal("#wizardModal"); activateScreen("marketing");
    }
    function submitBroadcastForApproval(task) {
      if (!transitionBroadcast(task, "审批中", "提交群发审批", "风控检查已写入任务")) return;
      task.approvalHistory.unshift({ node: "提交审批", operator: currentAccount().name, time: broadcastNow(), note: "提交内容、客群、时段与风控结果复核" });
      renderBroadcasts(); renderGrowthGovernance(); closeModal("#broadcastActionModal"); showToast("任务已进入审批中队列");
    }
    function completeBroadcastTask(task) {
      if (task.status !== "发送中" || task.execution.paused) return;
      const fail = Math.max(1, Math.round(task.target * (task.targetType === "客户群" ? .04 : .12)));
      task.fail = fail; task.success = task.target - fail; task.execution.pending = 0; task.execution.failureReasons = [{ reason: "客户拒收或会话不可达", count: fail }]; task.execution.p0Alert = task.tag === "术后回访";
      transitionBroadcast(task, "已完成", "完成群发", `成功 ${task.success} · 失败 ${task.fail}`);
      task.review = { clickRate: task.targetType === "客户群" ? "19.2% 群互动" : "21.8% 点击", conversion: task.targetType === "客户群" ? "7.1% 入群留存" : "8.4% 到店", churn: task.targetType === "客户群" ? "退群 0.9%" : "退订 0.4%" };
      renderBroadcasts(); renderBroadcastDetail(broadcastIndex(task.id));
    }
    function runBroadcast(index) {
      const task = broadcasts[index]; if (!task || !["待定时发送", "待员工确认"].includes(task.status)) return;
      transitionBroadcast(task, "发送中", task.status === "待员工确认" ? "员工确认发送" : "管理员开始发送", task.executionMode);
      task.execution.pending = Math.max(0, Math.round(task.target * .25)); renderBroadcasts(); renderBroadcastDetail(index);
      setTimeout(() => completeBroadcastTask(task), 700);
    }
    function openBroadcastAction(title, body, action, taskId, confirm = "确认") {
      pendingBroadcastId = taskId; $("#broadcastActionTitle").textContent = title; $("#broadcastActionBody").innerHTML = body; $("#broadcastActionConfirm").textContent = confirm; $("#broadcastActionConfirm").dataset.broadcastRiskConfirm = action; openModal("#broadcastActionModal");
    }
    function handleBroadcastAction(action) {
      if (action === "manualRecipients") { const selected = $$('[data-manual-recipient]:checked').map((input) => input.dataset.manualRecipient); if (broadcastTargetType === "客户群") { checkedGroupIds = new Set(selected); } else { checkedCustomerIndexes = new Set(selected.map(Number)); } broadcastFilterMode = "manual"; renderBroadcastWizard(); closeModal("#broadcastActionModal"); return; }
      const task = broadcasts.find((item) => item.id === pendingBroadcastId); if (!task) return;
      const note = $("#broadcastActionNote")?.value.trim() || "";
      if (action === "submit") { if ($("#broadcastRiskConfirm") && !$("#broadcastRiskConfirm").checked) return showToast("请确认风险处理结果"); return submitBroadcastForApproval(task); }
      if (action === "blocked") return closeModal("#broadcastActionModal");
      if (["reject", "terminate"].includes(action) && !note) return showToast("请填写原因后再继续");
      if (action === "approve") { const next = task.executionMode === "员工确认" ? "待员工确认" : "待定时发送"; transitionBroadcast(task, next, "审批通过", note || "审批通过"); task.approvalHistory.unshift({ node: "审批通过", operator: currentAccount().name, time: broadcastNow(), note: note || "同意按计划执行" }); }
      if (action === "reject") { transitionBroadcast(task, "已驳回", "驳回修改", note); task.approvalHistory.unshift({ node: "驳回修改", operator: currentAccount().name, time: broadcastNow(), note }); }
      if (action === "terminate") { transitionBroadcast(task, "已终止", "终止任务", note); task.approvalHistory.unshift({ node: "终止", operator: currentAccount().name, time: broadcastNow(), note }); }
      if (action === "edit") { task.time = $("#broadcastActionTime").value || task.time; task.operationLog.unshift({ action: "编辑发送时间", from: task.status, to: task.status, note: task.time, operator: currentAccount().name, time: broadcastNow() }); }
      if (action === "retry") { const retry = normalizeBroadcast({ ...task, id: `broadcast-${Date.now()}`, title: `${task.title} · 失败补发`, target: task.fail, success: 0, fail: 0, status: "草稿", recipients: task.recipients.filter((_, i) => i < task.fail), review: null }, broadcasts.length + 1); retry.operationLog.unshift({ action: "创建失败补发", from: task.id, to: "草稿", note: `来源任务失败 ${task.fail} 个`, operator: currentAccount().name, time: broadcastNow() }); broadcasts.unshift(retry); selectedBroadcastIndex = 0; }
      if (action === "archive") { task.archived = true; task.operationLog.unshift({ action: "归档任务", from: task.status, to: task.status, note: "已从活动列表隐藏", operator: currentAccount().name, time: broadcastNow() }); }
      renderBroadcasts(); renderGrowthGovernance(); closeModal("#broadcastActionModal");
    }

    function currentAccount() {
      return accounts.find((account) => account.id === currentAccountId) || accounts[0];
    }

    function accountPermissions(account) {
      if (!account.permissions) {
        account.permissions = [...(rolePermissionDefaults[account.role] || rolePermissionDefaults["运营专员"])];
      }
      account.menus = account.permissions.length;
      return account.permissions;
    }

    function renderAccountPermissionChecks(selected = []) {
      $("#accountPermissionChecks").innerHTML = permissionModules.map((module) => `
        <button class="choice ${selected.includes(module.key) ? "active" : ""}" data-account-permission="${module.key}" type="button">${module.label}</button>
      `).join("");
    }

    function selectedAccountPermissions() {
      return $$("[data-account-permission].active").map((item) => item.dataset.accountPermission);
    }

    function applyAccountPermissionsToNav(account = currentAccount()) {
      const permissions = accountPermissions(account);
      $$(".nav-button[data-screen]").forEach((button) => {
        const allowed = permissions.includes(button.dataset.screen);
        button.classList.toggle("locked", !allowed);
        button.setAttribute("aria-disabled", String(!allowed));
      });
    }

    function ensureScopeOption(scope) {
      if (!scopeOptions.includes(scope)) scopeOptions.push(scope);
      if ($("#scopeSelect")) $("#scopeSelect").value = scope;
      renderScopeSelect();
    }

    function renderScopeSelect() {
      const current = $("#scopeSelect")?.value || "全部医美客户";
      if (!$("#scopeSelectLabel") || !$("#scopeSelectMenu")) return;
      $("#scopeSelectLabel").textContent = current;
      $("#scopeSelectMenu").innerHTML = scopeOptions.map((scope) => `
        <button class="custom-option ${scope === current ? "active" : ""}" type="button" data-scope-option="${scope}">${scope}</button>
      `).join("");
    }

    function renderAccountChrome() {
      const account = currentAccount();
      const permissions = accountPermissions(account);
      ensureScopeOption(account.scope);
      if ($("#currentAccountScope")) {
        $("#currentAccountScope").textContent = `${account.name} 正在以${account.role}身份查看「${account.scope}」`;
        $("#currentRoleStat").textContent = account.role;
        $("#currentScopeStat").textContent = account.scope;
        $("#currentMenuStat").textContent = `${permissions.length} 个`;
        $("#currentStatusStat").textContent = account.status;
      }
      if ($("#sidebarAccountAvatar")) $("#sidebarAccountAvatar").textContent = account.name.slice(0, 1);
      if ($("#sidebarAccountName")) $("#sidebarAccountName").textContent = account.name;
      if ($("#sidebarAccountRole")) $("#sidebarAccountRole").textContent = `${account.role} · 当前账号`;
      applyAccountPermissionsToNav(account);
    }

    function renderAccountPermissionSummary(account) {
      const permissions = accountPermissions(account)
        .map((key) => permissionModules.find((item) => item.key === key)?.label || key);
      const visible = permissions.slice(0, 2);
      const rest = Math.max(0, permissions.length - visible.length);
      return `
        <div class="permission-summary" title="${permissions.join(" / ")}">
          ${visible.map((label) => `<span class="chip">${label}</span>`).join("")}
          ${rest ? `<span class="chip neutral">+${rest}</span>` : ""}
        </div>
      `;
    }

    function renderLoginTime(value) {
      const [date, time] = value.split(" ");
      return `<div class="login-time"><strong>${date || value}</strong>${time ? `<span>${time}</span>` : ""}</div>`;
    }

    function renderAccounts() {
      const rows = accounts.map((account) => `
        <tr>
          <td><strong>${account.name}</strong><div class="table-meta">${account.id === currentAccountId ? "当前登录账号" : "员工账号"}</div></td>
          <td>${account.login}</td>
          <td>${account.role}</td>
          <td>${account.scope}</td>
          <td>${renderAccountPermissionSummary(account)}</td>
          <td>${renderLoginTime(account.last)}</td>
          <td><button class="chip status-toggle ${account.status === "停用" ? "neutral" : ""}" data-toggle-account="${account.id}" title="点击切换启停状态">${account.status}</button></td>
          <td>
            <div class="filters account-actions">
              <button class="btn small" data-switch-account="${account.id}">切换</button>
              <button class="btn small" data-edit-account="${account.id}">权限编辑</button>
            </div>
          </td>
        </tr>
      `).join("");
      $("#accountRows").innerHTML = rows;

      $("#accountSwitchList").innerHTML = accounts.map((account) => `
        <button class="account-option ${account.id === currentAccountId ? "active" : ""}" data-switch-account="${account.id}" ${account.status === "停用" ? "disabled" : ""}>
          <span class="account-avatar">${account.name.slice(0, 1)}</span>
          <span class="account-option-main">
            <strong>${account.name} · ${account.role}</strong>
            <span>${account.login} · 数据范围：${account.scope}</span>
          </span>
          <span class="chip ${account.status === "停用" ? "neutral" : ""}">${account.status}</span>
        </button>
      `).join("");
    }

    function switchAccount(id) {
      const account = accounts.find((item) => item.id === id);
      if (!account) return;
      if (account.status === "停用") {
        showToast("该账号已停用，不能切换");
        return;
      }
      currentAccountId = id;
      renderAccountChrome();
      renderAccounts();
      closeModals();
      showToast(`已切换为 ${account.name} · ${account.role}`);
    }

    function openAccountEditor(id = null) {
      editingAccountId = id;
      const account = accounts.find((item) => item.id === id);
      $("#accountEditTitle").textContent = account ? "编辑员工账号" : "新增员工账号";
      $("#accountNameInput").value = account?.name || "周审核";
      $("#accountLoginInput").value = account?.login || "zhou.audit";
      $("#accountRoleInput").value = account?.role || "风控审核员";
      $("#accountScopeInput").value = account?.scope || "风控会话";
      renderAccountPermissionChecks(account ? accountPermissions(account) : rolePermissionDefaults["风控审核员"]);
      openModal("#accountEditModal");
    }

    function drawTrendChart() {
      const canvas = $("#trendCanvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const period = $("#trendPeriod")?.value || "7";
      const isMonthly = period === "30";
      const series = isMonthly
        ? [{ color: "#1f7a68", width: 3, points: [86, 78, 74, 68, 63, 59, 55, 50] }, { color: "#c76a61", width: 3, points: [100, 96, 88, 91, 80, 84, 72, 76] }, { color: "#d58a2a", width: 3, points: [108, 104, 100, 102, 94, 96, 89, 91] }]
        : [{ color: "#1f7a68", width: 3, points: [78, 68, 46, 58, 42, 52, 30] }, { color: "#c76a61", width: 3, points: [96, 88, 76, 82, 72, 80, 64] }, { color: "#d58a2a", width: 3, points: [108, 103, 96, 99, 92, 95, 86] }];
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      const width = Math.max(1, Math.round(rect.width * ratio));
      const height = Math.max(1, Math.round(rect.height * ratio));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const drawWidth = rect.width;
      const drawHeight = rect.height;
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      series.forEach((line) => {
        ctx.beginPath();
        line.points.forEach((y, index) => {
          const x = index * (drawWidth / (line.points.length - 1));
          if (index === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      });
      const axis = $("#trendAxis");
      if (axis) axis.innerHTML = (isMonthly ? ["06/17", "06/21", "06/25", "06/29", "07/03", "07/07", "07/11", "今天"] : ["周四", "周五", "周六", "周日", "周一", "周二", "今天"]).map((label) => `<span>${label}</span>`).join("");
      const summary = $("#trendSummary");
      if (summary) summary.innerHTML = isMonthly
        ? `<div><span>累计新增潜客</span><strong>1,846</strong></div><div><span>高意向咨询</span><strong>542</strong></div><div><span>预约到店</span><strong>216</strong></div>`
        : `<div><span>今日新增潜客</span><strong>86</strong></div><div><span>高意向咨询</span><strong>54</strong></div><div><span>今日预约</span><strong>21</strong></div>`;
    }

    function updateBatchbar() {
      const count = checkedCustomerIndexes.size;
      $("#batchbar").classList.toggle("show", count > 0);
      $("#batchbar span").textContent = `已选 ${count} 位潜客`;
    }

    function updatePageSelectAll() {
      const checks = $$(".rowCheck");
      $("#selectAll").checked = checks.length > 0 && checks.every((check) => check.checked);
    }

    function tagTargetIndexes() {
      if (tagMode === "single") return [selectedCustomerIndex];
      if (tagTargetScope === "selected") return checkedCustomerIndexes.size ? Array.from(checkedCustomerIndexes) : [selectedCustomerIndex];
      if (tagTargetScope === "high-intent") {
        return customers
          .map((customer, index) => ({ customer, index }))
          .filter(({ customer }) => customer.tags.some((tag) => tag.includes("高意向") || tag.includes("抗衰")))
          .map(({ index }) => index);
      }
      if (tagTargetScope === "pending-follow") {
        return customers
          .map((customer, index) => ({ customer, index }))
          .filter(({ customer }) => customer.status.includes("待回访") || customer.status.includes("沉默"))
          .map(({ index }) => index);
      }
      if (tagTargetScope === "recent-new") {
        return customers.map((customer, index) => index).slice(0, 86);
      }
      return [selectedCustomerIndex];
    }

    function tagScopeLabel() {
      if (tagMode === "single") return customers[selectedCustomerIndex]?.name || "当前潜客";
      const labels = {
        selected: "已勾选潜客",
        "high-intent": "高意向潜客",
        "pending-follow": "待回访潜客",
        "recent-new": "近 7 天新增潜客"
      };
      return labels[tagTargetScope] || "目标潜客";
    }

    function renderTagSelection() {
      const list = $("#selectedTagList");
      renderTagChoices();
      list.innerHTML = tagSelection.size
        ? Array.from(tagSelection).map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")
        : `<span class="table-meta">请从常用标签中选择，或搜索新标签加入</span>`;
      $$("[data-tag-choice]").forEach((choice) => {
        choice.classList.toggle("active", tagSelection.has(choice.dataset.tagChoice));
      });
      const targetIndexes = tagTargetIndexes();
      const group = tagMode === "group" ? groups.find((item) => item.id === selectedGroupId) : null;
      const sampleNames = targetIndexes.slice(0, 3).map((index) => customers[index]?.name).filter(Boolean).join("、");
      $("#tagTargetScopeRow").style.display = tagMode === "batch" ? "grid" : "none";
      $$("[data-tag-scope]").forEach((choice) => {
        choice.classList.toggle("active", choice.dataset.tagScope === tagTargetScope);
      });
      $("#tagScopeHint").textContent = tagMode === "batch"
        ? `当前目标：${tagScopeLabel()} · ${targetIndexes.length} 位。样本：${sampleNames || "暂无匹配潜客"}`
        : "";
      $("#tagTargetText").textContent = tagMode === "group"
        ? `正在编辑「${group?.name || "当前群组"}」的群标签`
        : tagMode === "single"
          ? `将为 ${customers[selectedCustomerIndex].name} 添加标签`
          : `将为「${tagScopeLabel()}」中的 ${targetIndexes.length} 位潜客添加标签`;
    }

    function openTagModal(trigger) {
      const group = groups.find((item) => item.id === trigger.dataset.editGroupTags);
      tagMode = group ? "group" : (trigger.closest("#customerDetailModal") || trigger.dataset.tagMode === "single" ? "single" : "batch");
      if (tagMode === "group") {
        selectedGroupId = group.id;
        tagSelection = new Set(groupTagNames(group));
      } else if (tagMode !== "single") {
        const entry = trigger.dataset.tagEntry || "";
        tagTargetScope = entry === "dashboard" ? "high-intent" : "selected";
        tagSelection = new Set();
      } else {
        tagSelection = new Set();
      }
      $("#tagTitle").textContent = tagMode === "group" ? "编辑群标签" : tagMode === "single" ? "添加客户标签" : "批量打标签";
      $("#confirmTags").textContent = tagMode === "group" ? "保存标签" : "确认添加";
      $("#tagSearchInput").value = "";
      renderTagSelection();
      openModal("#tagModal");
    }

    function showToast(text) {
      $("#toastText").textContent = text;
      $("#toast").classList.add("show");
      setTimeout(() => $("#toast").classList.remove("show"), 2400);
    }

    function animateMetricValue(selector, value) {
      const node = typeof selector === "string" ? $(selector) : selector;
      if (!node) return;
      const target = Number(value);
      const start = Number(String(node.textContent).replace(/[^\d.-]/g, "")) || 0;
      const startedAt = performance.now();
      const duration = 460;
      node.classList.remove("is-metric-updating");
      requestAnimationFrame(() => node.classList.add("is-metric-updating"));
      const tick = (now) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = Math.round(start + (target - start) * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    function markOperationFeedback(selector) {
      requestAnimationFrame(() => {
        const node = document.querySelector(selector);
        if (!node) return;
        node.classList.remove("operation-feedback");
        requestAnimationFrame(() => node.classList.add("operation-feedback"));
        setTimeout(() => node.classList.remove("operation-feedback"), 620);
      });
    }

    function setAiGenerating(button, isGenerating) {
      if (!button) return;
      if (isGenerating) {
        button.dataset.idleLabel = button.innerHTML;
        button.classList.add("is-generating");
        button.disabled = true;
        button.innerHTML = `<iconify-icon icon="icon-park-outline:loading-four"></iconify-icon>生成中`;
        return;
      }
      button.classList.remove("is-generating");
      button.disabled = false;
      button.innerHTML = button.dataset.idleLabel || "生成文案";
    }

    function nowLabel() {
      return new Intl.DateTimeFormat("zh-CN", {
        month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false
      }).format(new Date()).replaceAll("/", "-");
    }

    function recordOperation(type, object, detail) {
      operationLogs.unshift({ time: nowLabel(), staff: currentAccount().name, type, object, detail });
      if ($("#logRows")) renderSupplementModules();
    }

    function downloadTextFile(filename, content, mime = "application/json;charset=utf-8") {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 500);
    }

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const fallback = document.createElement("textarea");
        fallback.value = text;
        fallback.setAttribute("readonly", "");
        fallback.style.position = "fixed";
        fallback.style.opacity = "0";
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand("copy");
        fallback.remove();
      }
    }

    function openWorkflow({ title, body, confirmLabel = "确认", cancelLabel = "取消", hideConfirm = false, onConfirm = null }) {
      $("#workflowTitle").textContent = title;
      $("#workflowBody").innerHTML = body;
      $("#workflowConfirm").textContent = confirmLabel;
      $("#workflowConfirm").hidden = hideConfirm;
      $("#workflowCancel").textContent = cancelLabel;
      pendingWorkflow = onConfirm;
      openModal("#workflowModal");
      requestAnimationFrame(() => $("#workflowBody input, #workflowBody select, #workflowBody textarea, #workflowConfirm")?.focus());
    }

    function markSaved(selector, text = "已保存") {
      const node = $(selector);
      if (!node) return;
      node.textContent = `${text} · ${nowLabel()}`;
    }

    function markDirty(selector) {
      const node = $(selector);
      if (node) node.textContent = "有未保存更改";
    }

    function openExternalDependency({ title, description, localResult, confirmLabel = "复制接入信息", copyValue = "" }) {
      openWorkflow({
        title,
        confirmLabel,
        body: `
          <div class="workflow-external"><strong>需要外部服务</strong><span>${escapeHtml(description)}</span></div>
          <div class="workflow-summary"><strong>当前 Demo 可完成</strong><span>${escapeHtml(localResult)}</span></div>
        `,
        onConfirm: async () => {
          if (copyValue) await copyText(copyValue);
          recordOperation("外部能力准备", title, localResult);
          showToast(copyValue ? "接入信息已复制" : "已记录外部能力接入项");
        }
      });
    }

    function openModal(id) {
      $(id).classList.add("show");
      $(id).setAttribute("aria-hidden", "false");
    }

    function assistantContextText() {
      const activeScreen = $(".screen.active")?.id?.replace("screen-", "") || "dashboard";
      const activeSubscreen = $(`#screen-${activeScreen} .subscreen.active`)?.dataset.subscreen || "";
      const map = {
        dashboard: "工作台 · 优先处理风险会话、复购提醒和审批中群发",
        customers: activeSubscreen === "conversations"
          ? "客户运营 · 基于当前会话生成回复、风险摘要和待办"
          : activeSubscreen === "groups"
            ? "客户运营 · 基于当前群聊生成群发、回复和群标签"
            : "客户运营 · 基于当前潜客推荐标签、跟进和触达动作",
        marketing: "营销中心 · 生成群发草稿、朋友圈内容和复购触达计划",
        assets: activeSubscreen === "tag-system"
          ? "素材与标签 · 生成标签治理建议和客户打标方案"
          : "素材与标签 · 基于素材生成文案、摘要和投放建议",
        ai: "AI能力中心 · 配置模型能力、复核阈值和防刷策略",
        data: "数据中心 · 总结数据异常和可执行运营建议",
        system: "系统管理 · 检查账号权限、数据范围和配置风险"
      };
      return map[activeScreen] || "全局 · 可生成回复、标签、群发和风险摘要";
    }

    function addAiCopyRecord(title, content) {
      const record = { title, content, time: nowLabel(), justGenerated: true };
      aiCopyHistory.unshift(record);
      renderAiCopyHistory();
      setTimeout(() => {
        record.justGenerated = false;
        renderAiCopyHistory();
      }, 520);
    }

    function renderAiCopyHistory() {
      const container = $("#aiCopyHistory");
      if (!container) return;
      container.innerHTML = aiCopyHistory.length ? aiCopyHistory.map((item, index) => `
        <article class="ai-copy-history-item ${item.justGenerated ? "is-new" : ""}">
          <div class="ai-copy-history-head"><div><strong>${escapeHtml(item.title)}</strong><span class="table-meta">${item.time} · 朋友圈 / 群发可用</span></div></div>
          <p>${escapeHtml(item.content)}</p>
          <div class="ai-copy-history-actions"><button class="btn small" data-ai-copy-preview="${index}">预览发送</button><button class="btn small ghost" data-ai-copy-copy="${index}"><iconify-icon icon="icon-park-outline:copy"></iconify-icon>复制文案</button></div>
        </article>
      `).join("") : `<span class="table-meta">暂未生成文案。</span>`;
    }

    function previewAiCopy(index) {
      const item = aiCopyHistory[index];
      if (!item) return;
      openWorkflow({
        title: "发送预览",
        confirmLabel: "写入群发草稿",
        body: `<div class="workflow-summary"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.content)}</p></div><div class="workflow-external"><strong>发送前确认</strong><span>当前为 Demo 预览；确认后将把文案带入群发草稿，不会直接发送。</span></div>`,
        onConfirm: () => {
          resetBroadcastWizard();
          $("#broadcastTitleInput").value = item.title;
          $("#broadcastContentInput").value = item.content;
          renderBroadcastWizard();
          openModal("#wizardModal");
          showToast("文案已写入群发草稿");
        }
      });
    }

    function renderWecomSyncStatus() {
      const status = $("#assistantSyncStatus");
      if (!status) return;
      const map = {
        healthy: { title: "企微正常", detail: "每30秒同步", popover: ["同步周期：每 30 秒", "数据范围：客户、会话、待办与风险事件"] },
        loading: { title: "同步中", detail: "请稍候", popover: ["正在校验企微连接与数据增量", "同步完成后将自动更新待办与风险事件"] },
        delayed: { title: "同步延迟", detail: "超过2分钟", popover: ["最近同步：2 分 18 秒前", "请检查网络或重新连接企微"] },
        error: { title: "同步失败", detail: "需要修复", popover: [wecomSyncReason || "企微授权已过期", "点击后可重新连接或重新授权"] }
      };
      const current = map[wecomSyncStatus] || map.healthy;
      status.dataset.syncStatus = wecomSyncStatus;
      status.querySelector(".assistant-status-label").innerHTML = `<strong>${current.title}</strong><span class="assistant-status-detail"> · ${current.detail}</span>`;
      status.querySelector(".assistant-status-popover").innerHTML = `<strong>企微同步详情</strong><span>${current.popover[0]}</span><span>${current.popover[1]}</span>`;
    }

    function setWecomSyncStatus(status, reason = "") {
      wecomSyncStatus = status;
      wecomSyncReason = reason;
      renderWecomSyncStatus();
      renderAssistantRail();
    }

    function guardMarketingAction(label, proceed) {
      if (wecomSyncStatus === "healthy") return proceed();
      openWorkflow({
        title: "企微数据未完全同步",
        confirmLabel: `仍要${label}`,
        body: `<div class="workflow-external"><strong>${wecomSyncStatus === "error" ? "同步失败" : "同步存在延迟"}</strong><span>当前客户、待办和风险数据可能不完整。建议先修复企微连接，再执行营销操作。</span></div>`,
        onConfirm: () => proceed()
      });
    }

    function assistantRoute() {
      const screen = $(".screen.active")?.id?.replace("screen-", "") || "dashboard";
      const subscreen = $(`#screen-${screen} .subscreen.active`)?.dataset.subscreen || "";
      return { screen, subscreen };
    }

    function assistantActionButton(action) {
      const attr = action.thread
        ? `data-thread-ai-action="${action.thread}"`
        : action.ai
          ? `data-ai-action="${action.ai}"`
          : `data-assistant-command="${action.command}"`;
      const shortLabels = {
        "dashboard-risk": "处理风险",
        "dashboard-approval": "群发审批",
        "dashboard-broadcast": "生成群发",
        "group-open-thread": "进入群聊",
        "group-broadcast": "生成群发",
        "group-tags": "群标签",
        "batch-add-submit": "批量加友",
        "batch-add-check": "检查号码",
        "customer-batch-tags": "补充标签",
        "customer-open-thread": "查看会话",
        "customer-follow": "添加跟进",
        "marketing-precheck": "发送校验",
        "marketing-detail": "任务详情",
        "marketing-run": "执行任务",
        "asset-governance": "整理素材",
        "asset-apply-tag": "查重素材",
        "asset-generate-copy": "生成变体",
        "ai-copy-generate": "生成文案",
        "ai-fraud-task": "创建防刷",
        "ai-config-check": "检查配置",
        "data-anomaly": "分析波动",
        "data-task": "生成待办",
        "data-export": "生成报告",
        "system-permission-audit": "权限检查",
        "system-switch-preview": "账号预览",
        "system-edit-current": "编辑权限",
        "risk-reply": "安抚回复",
        "risk-summary": "风险摘要",
        "todo": "转待办",
        "group-faq": "群答疑",
        "broadcast": "生成群发",
        "repurchase-reply": "复购回复",
        "schedule": "预约话术",
        "consult-reply": "引导回复",
        "add-tags": "补充标签",
        "follow-up": "添加跟进",
        "smart-reply": "生成回复",
        tags: "推荐标签"
      };
      const shortLabel = shortLabels[action.command || action.thread || action.ai] || action.title;
      return `
        <button class="assistant-rail-action${action.priority === "primary" ? " is-primary" : ""}" ${attr} aria-label="${action.title}：${action.desc}">
          <iconify-icon icon="${action.icon || "icon-park-outline:magic"}"></iconify-icon>
          <strong>${shortLabel}</strong>
        </button>
      `;
    }

    function assistantResultHtml() {
      return `
        <strong>${assistantLastResult.title}</strong>
        <p>${assistantLastResult.text}</p>
        ${assistantLastResult.tags?.length ? `<div class="tag-wrap">${assistantLastResult.tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div>` : ""}
      `;
    }

    function assistantState() {
      const { screen, subscreen } = assistantRoute();
      const selectedCustomer = customers[selectedCustomerIndex] || customers[0];
      const checkedCount = checkedCustomerIndexes.size || 1;
      const thread = currentThread();
      const group = groups.find((item) => item.id === selectedGroupId) || groups[0];
      const broadcast = broadcasts[selectedBroadcastIndex] || broadcasts[0];
      const defaultState = {
        context: assistantContextText(),
        insightTitle: "可生成下一步运营动作",
        insightText: "AI 会结合当前页面、已选对象和业务状态，生成可直接写回页面的操作。",
        tags: ["智能建议"],
        actions: [
          { command: "dashboard-risk", title: "处理风险会话", desc: "打开高危会话并生成安抚回复", icon: "icon-park-outline:attention" },
          { ai: "tags", title: "推荐标签", desc: "为当前对象预选可写回标签", icon: "icon-park-outline:tag-one" }
        ]
      };

      if (screen === "dashboard") {
        return {
          context: "工作台 · 4 项待办 · 1 项逾期",
          insightTitle: "待办优先级异常",
          insightText: "张女士术后风险会话已逾期，且水光复购群发计划临近 16:30，建议先处理风险再执行复购触达。",
          tags: ["风险优先", "水光复购"],
          risk: {
            overdue: "已逾期 2小时18分",
            level: "高风险",
            consequence: "继续延误可能引发投诉、差评与客诉升级。请先完成安抚与回访。"
          },
          actions: [
            { command: "dashboard-risk", title: "处理张女士风险会话", desc: "打开会话并写入安抚回复", icon: "icon-park-outline:attention", priority: "primary" },
            { command: "dashboard-approval", title: "处理群发审批", desc: "查看审批中任务并决定下一步", icon: "icon-park-outline:check-correct" },
            { command: "dashboard-broadcast", title: "生成复购群发草稿", desc: "预填目标标签、素材和发送时间", icon: "icon-park-outline:send-one" }
          ]
        };
      }

      if (screen === "customers") {
        if (subscreen === "conversations") {
          const threadActions = threadAiRecommendations(thread).map((item) => ({
            thread: item.key,
            title: item.label,
            desc: thread.type === "群聊" ? "写入当前群聊回复或群运营动作" : "写入当前单客会话或生成待办",
            icon: item.icon
          }));
          return {
            context: `会话跟进 · ${thread.title} · ${thread.type}`,
            insightTitle: thread.side.risk === "高" ? "当前会话存在客诉风险" : "当前会话可继续推进",
            insightText: thread.side.risk === "高"
              ? `${thread.title}出现「${thread.summary}」，建议先安抚情绪、承诺回访时间，并同步门店顾问。`
              : `${thread.title}围绕「${thread.side.project}」咨询，适合直接生成回复并补充标签或后续跟进。`,
            tags: [...thread.tags],
            actions: threadActions
          };
        }
        if (subscreen === "groups") {
          return {
            context: `群聊管理 · ${group.name}`,
            insightTitle: "当前群适合做复购/答疑承接",
            insightText: `${group.name}最近活跃在 ${group.active}，群标签为「${group.tag}」，适合生成群答疑、群发草稿或补充群标签。`,
            tags: [group.tag, group.meta],
            actions: [
              { command: "group-open-thread", title: "进入群聊回复", desc: "打开当前群会话并生成答疑", icon: "icon-park-outline:comment" },
              { command: "group-broadcast", title: "基于当前群生成群发", desc: "复用群标签和素材创建草稿", icon: "icon-park-outline:send-one" },
              { command: "group-tags", title: "推荐群标签", desc: "打开标签弹窗并预选群运营标签", icon: "icon-park-outline:tag-one" }
            ]
          };
        }
        if (subscreen === "batch-add") {
          return {
            context: "批量加好友 · 导入手机号",
            insightTitle: "执行前需要控制加好友节奏",
            insightText: "当前任务识别出有效号码，可按空闲优先分配，并建议 30 秒间隔执行降低风控风险。",
            tags: ["防风控", "自动分配"],
            actions: [
              { command: "batch-add-submit", title: "提交批量加好友任务", desc: "按当前间隔和分配方式执行", icon: "icon-park-outline:user-to-user-transmission" },
              { command: "batch-add-check", title: "检查无效号码", desc: "提示过滤规则和重试策略", icon: "icon-park-outline:check-one" }
            ]
          };
        }
        return {
          context: `客户管理 · 已选 ${checkedCount} 位潜客`,
          insightTitle: "当前选择可直接进入精细化运营",
          insightText: `${selectedCustomer.name}的核心需求为「${selectedCustomer.tags.join("、")}」，已勾选 ${checkedCount} 位潜客，可批量补标签、生成群发或添加跟进。`,
          tags: selectedCustomer.tags,
          actions: [
            { command: "customer-batch-tags", title: `给 ${checkedCount} 位潜客补标签`, desc: "预选水光复购/高意向/术后回访", icon: "icon-park-outline:tag-one" },
            { command: "customer-open-thread", title: `查看 ${selectedCustomer.name} 会话`, desc: "进入会话并生成针对性回复", icon: "icon-park-outline:message-sent" },
            { command: "customer-follow", title: "添加跟进记录", desc: "把当前潜客写入跟进任务", icon: "icon-park-outline:notes" }
          ]
        };
      }

      if (screen === "marketing") {
        return {
          context: `营销中心 · ${broadcast.title}`,
          insightTitle: "群发任务需要发送前校验",
          insightText: `${broadcast.title}当前状态为「${broadcast.status}」，目标 ${broadcast.target.toLocaleString()} ${broadcast.targetType === "客户群" ? "个客户群" : "位客户"}，建议先核对防打扰和素材完整性。`,
          tags: [broadcast.tag, broadcast.status],
          actions: [
            { command: "marketing-precheck", title: "检查防打扰与重复触达", desc: "排除近 7 天已触达和高风险对象", icon: "icon-park-outline:radar" },
            { command: "marketing-detail", title: "查看当前任务详情", desc: "定位任务详情并解释进度", icon: "icon-park-outline:doc-detail" },
            { command: "marketing-run", title: "执行/重试当前任务", desc: "根据任务状态完成下一步", icon: "icon-park-outline:play" }
          ]
        };
      }

      if (screen === "assets") {
        const isTags = subscreen === "tag-system";
        const untagged = assets.filter((asset) => !asset.tags?.length).length || 23;
        const duplicates = Math.max(2, assets.filter((asset) => asset.title.includes("复购")).length);
        const expiring = assets.filter((asset) => asset.status === "已过期").length || 5;
        const unused = assets.filter((asset) => asset.uses === 0).length || 12;
        return {
          context: isTags ? "素材与标签 · 标签管理" : "素材与标签 · 素材库",
          insightTitle: isTags ? "标签体系存在重复候选" : "素材库需要治理和归类",
          insightText: isTags
            ? "检测到「高意向」和「高意向咨询」存在语义重复，建议合并并清理停用标签。"
            : `${untagged} 个素材未打标签，${duplicates} 个疑似重复素材，${expiring} 个素材已过期，${unused} 个素材近 30 天未使用。`,
          tags: isTags ? ["高意向", "高意向咨询"] : ["自动整理", "重复检测"],
          actions: [
            { command: "asset-governance", title: isTags ? "生成标签治理建议" : "AI 自动整理素材", desc: "补全标签、集合和项目归属", icon: "icon-park-outline:analysis" },
            { command: "asset-apply-tag", title: "查找重复素材", desc: "识别相似命名和重复内容", icon: "icon-park-outline:tag-one" },
            { command: "asset-generate-copy", title: "生成同风格变体", desc: "跳转 AI 文案页并写入生成结果", icon: "icon-park-outline:edit" }
          ]
        };
      }

      if (screen === "ai") {
        return {
          context: "AI能力中心 · 当前正在维护智能能力配置",
          insightTitle: "当前配置会影响全局智能操作",
          insightText: "文案生成、风险识别和人工复核阈值会被客户运营、营销中心和素材标签模块调用。",
          tags: ["文案生成", "防刷任务"],
          actions: [
            { command: "ai-copy-generate", title: "生成当前文案", desc: "把结果写入生成结果卡片", icon: "icon-park-outline:edit" },
            { command: "ai-fraud-task", title: "创建防刷任务", desc: "进入活动防刷并生成配置建议", icon: "icon-park-outline:shield" },
            { command: "ai-config-check", title: "检查模型配置", desc: "提示外部模型接口依赖", icon: "icon-park-outline:setting" }
          ]
        };
      }

      if (screen === "data") {
        return {
          context: "数据中心 · 运营数据",
          insightTitle: "可从数据异常生成任务",
          insightText: "高意向咨询与预约转化存在波动，建议生成复购跟进任务并导出日报给主管。",
          tags: ["数据异常", "任务生成"],
          actions: [
            { command: "data-anomaly", title: "解释今日数据波动", desc: "生成异常原因和运营建议", icon: "icon-park-outline:trend" },
            { command: "data-task", title: "生成运营待办", desc: "把数据建议写入工作台待办", icon: "icon-park-outline:alarm" },
            { command: "data-export", title: "生成数据报告", desc: "触发报表生成反馈", icon: "icon-park-outline:download" }
          ]
        };
      }

      if (screen === "system") {
        return {
          context: "系统管理 · 账号权限",
          insightTitle: "账号权限需要按角色边界校验",
          insightText: "运营专员和内容运营的数据范围不同，建议检查模块权限，避免越权查看客户会话或素材配置。",
          tags: ["权限检查", "数据范围"],
          actions: [
            { command: "system-permission-audit", title: "检查权限风险", desc: "生成当前账号权限建议", icon: "icon-park-outline:protect" },
            { command: "system-switch-preview", title: "切换账号预览", desc: "打开账号切换弹窗验证角色边界", icon: "icon-park-outline:switch" },
            { command: "system-edit-current", title: "编辑当前员工权限", desc: "打开当前账号权限编辑", icon: "icon-park-outline:edit" }
          ]
        };
      }
      return defaultState;
    }

    function renderAssistantRail() {
      if (!$("#assistantRail")) return;
      const state = assistantState();
      $("#assistantRailContextText").textContent = state.context;
      $("#assistantContextDetails").hidden = state.risk == null;
      $("#assistantRailOutput").classList.toggle("assistant-rail-insight", state.risk == null);
      $("#assistantRailOutput").innerHTML = state.risk ? `
        ${wecomSyncStatus === "error" ? `<div class="assistant-sync-banner">⚠ 企微数据同步失败，待办、风险信息存在偏差，请先修复连接再处理客户。</div>` : ""}
        <strong>P0｜张女士术后客诉逾期</strong>
        <div class="assistant-risk-meta"><span>${state.risk.overdue}</span><span>${state.risk.level}</span></div>
        <p>${state.risk.consequence}</p>
        <div class="assistant-risk-profile-wrap">
          <button class="text-link assistant-risk-profile" data-assistant-command="dashboard-risk-detail" aria-describedby="assistantRiskPreview">查看风险档案</button>
          <div class="assistant-risk-preview" id="assistantRiskPreview" role="tooltip"><strong>张女士｜风险预览</strong><span>项目：水光修护套餐</span><span>术后：2026-07-13（第 2 天）</span><span>历史投诉：1 次 · 已闭环</span></div>
        </div>
      ` : `
        <div class="assistant-insight-line">
          <span class="assistant-insight-icon"><iconify-icon icon="icon-park-outline:attention"></iconify-icon></span>
          <div>
            <strong>${state.insightTitle}</strong>
            <p>${state.insightText}</p>
            ${state.tags?.length ? `<div class="tag-wrap assistant-insight-tags">${state.tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div>` : ""}
          </div>
        </div>
      `;
      $("#assistantRailActions").innerHTML = state.actions.map(assistantActionButton).join("");
    }

    function refreshAssistantMini() {
      if ($("#assistantContextText")) $("#assistantContextText").textContent = assistantContextText();
      renderAssistantRail();
      if ($("#assistantLauncherHint")) {
        const activeScreen = $(".screen.active")?.id?.replace("screen-", "") || "dashboard";
        $("#assistantLauncherHint").textContent = activeScreen === "customers" ? "会话建议" : activeScreen === "assets" ? "素材建议" : "3 条建议";
      }
    }

    function isAssistantRailVisible() {
      const rail = $("#assistantRail");
      return Boolean(rail && getComputedStyle(rail).display !== "none");
    }

    function setAssistantRailCollapsed(collapsed) {
      const content = $("#appContent");
      const rail = $("#assistantRail");
      const collapseButton = $("#assistantRailCollapse");
      const expandButton = $("#assistantRailExpand");
      if (!content || !rail) return;

      content.classList.toggle("assistant-rail-collapsed", collapsed);
      rail.setAttribute("aria-hidden", String(collapsed));
      collapseButton?.setAttribute("aria-expanded", String(!collapsed));
      expandButton?.setAttribute("aria-expanded", String(!collapsed));
      if (collapsed) closeAssistantMini();
    }

    function bindAssistantRailReopenDrag() {
      const button = $("[data-assistant-rail-drag]");
      if (!button) return;
      let pointerId = null;
      let startY = 0;
      let initialTop = 0;
      let didDrag = false;

      const clampTop = (top) => Math.min(Math.max(12, top), Math.max(12, window.innerHeight - button.offsetHeight - 12));
      const finishDrag = () => {
        if (pointerId === null) return;
        button.classList.remove("is-dragging");
        button.dataset.didDrag = String(didDrag);
        pointerId = null;
      };

      button.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        pointerId = event.pointerId;
        startY = event.clientY;
        initialTop = button.getBoundingClientRect().top;
        didDrag = false;
        button.setPointerCapture(pointerId);
        button.classList.add("is-dragging");
      });

      button.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointerId) return;
        const offset = event.clientY - startY;
        if (Math.abs(offset) > 4) didDrag = true;
        button.style.setProperty("--assistant-rail-reopen-top", `${clampTop(initialTop + offset)}px`);
      });

      button.addEventListener("pointerup", finishDrag);
      button.addEventListener("pointercancel", finishDrag);
      button.addEventListener("click", (event) => {
        if (button.dataset.didDrag !== "true") return;
        event.preventDefault();
        event.stopPropagation();
        button.dataset.didDrag = "false";
      }, true);

      window.addEventListener("resize", () => {
        const currentTop = Number.parseFloat(getComputedStyle(button).top);
        if (Number.isFinite(currentTop)) button.style.setProperty("--assistant-rail-reopen-top", `${clampTop(currentTop)}px`);
      });
    }

    function bindAssistantRailPanelDrag() {
      const handle = $("[data-assistant-rail-panel-drag]");
      const rail = $("#assistantRail");
      if (!handle || !rail) return;
      let pointerId = null;
      let startY = 0;
      let initialTop = 0;
      let didDrag = false;

      const clampTop = (top) => Math.min(Math.max(12, top), Math.max(12, window.innerHeight - Math.min(rail.offsetHeight, window.innerHeight - 24) - 12));
      const finishDrag = () => {
        if (pointerId === null) return;
        handle.classList.remove("is-dragging");
        handle.dataset.didDrag = String(didDrag);
        pointerId = null;
      };

      handle.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        pointerId = event.pointerId;
        startY = event.clientY;
        initialTop = rail.getBoundingClientRect().top;
        didDrag = false;
        handle.setPointerCapture(pointerId);
        handle.classList.add("is-dragging");
      });

      handle.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointerId) return;
        const offset = event.clientY - startY;
        if (Math.abs(offset) > 4) didDrag = true;
        rail.style.setProperty("--assistant-rail-top", `${clampTop(initialTop + offset)}px`);
      });

      handle.addEventListener("pointerup", finishDrag);
      handle.addEventListener("pointercancel", finishDrag);
      handle.addEventListener("click", (event) => {
        if (handle.dataset.didDrag !== "true") return;
        event.preventDefault();
        event.stopPropagation();
        handle.dataset.didDrag = "false";
      }, true);
    }

    function bindAssistantLauncherDrag() {
      const launcher = $("[data-assistant-launcher-drag]");
      if (!launcher) return;
      let pointerId = null;
      let grabOffsetX = 0;
      let grabOffsetY = 0;
      let didDrag = false;

      const clampPosition = (left, top) => ({
        left: Math.min(Math.max(12, left), Math.max(12, window.innerWidth - launcher.offsetWidth - 12)),
        top: Math.min(Math.max(12, top), Math.max(12, window.innerHeight - launcher.offsetHeight - 12))
      });

      const positionOverlays = (left, top) => {
        [$("#assistantMini"), $("#assistantDrawer")].forEach((overlay) => {
          if (!overlay) return;
          const overlayLeft = Math.min(Math.max(12, left + launcher.offsetWidth - overlay.offsetWidth), Math.max(12, window.innerWidth - overlay.offsetWidth - 12));
          const overlayTop = Math.min(Math.max(12, top - overlay.offsetHeight - 12), Math.max(12, window.innerHeight - overlay.offsetHeight - 12));
          overlay.classList.add("assistant-positioned");
          overlay.style.left = `${overlayLeft}px`;
          overlay.style.top = `${overlayTop}px`;
        });
      };

      const setPosition = (left, top) => {
        const next = clampPosition(left, top);
        launcher.classList.add("is-positioned");
        launcher.style.setProperty("--assistant-launcher-left", `${next.left}px`);
        launcher.style.setProperty("--assistant-launcher-top", `${next.top}px`);
        positionOverlays(next.left, next.top);
      };

      const finishDrag = () => {
        if (pointerId === null) return;
        launcher.classList.remove("is-dragging");
        launcher.dataset.didDrag = String(didDrag);
        pointerId = null;
      };

      launcher.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        const rect = launcher.getBoundingClientRect();
        pointerId = event.pointerId;
        grabOffsetX = event.clientX - rect.left;
        grabOffsetY = event.clientY - rect.top;
        didDrag = false;
        launcher.setPointerCapture(pointerId);
        launcher.classList.add("is-dragging");
      });

      launcher.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointerId) return;
        const left = event.clientX - grabOffsetX;
        const top = event.clientY - grabOffsetY;
        if (Math.abs(left - launcher.getBoundingClientRect().left) > 4 || Math.abs(top - launcher.getBoundingClientRect().top) > 4) didDrag = true;
        setPosition(left, top);
      });

      launcher.addEventListener("pointerup", finishDrag);
      launcher.addEventListener("pointercancel", finishDrag);
      launcher.addEventListener("click", (event) => {
        if (launcher.dataset.didDrag !== "true") return;
        event.preventDefault();
        event.stopPropagation();
        launcher.dataset.didDrag = "false";
      }, true);

      window.addEventListener("resize", () => {
        if (!launcher.classList.contains("is-positioned")) return;
        const rect = launcher.getBoundingClientRect();
        setPosition(rect.left, rect.top);
      });
    }

    function focusAssistantRail() {
      const rail = $("#assistantRail");
      if (!rail) return;
      refreshAssistantMini();
      rail.classList.add("focused");
      rail.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      setTimeout(() => rail.classList.remove("focused"), 1200);
    }

    function openAssistantMini() {
      clearTimeout(assistantHoverCloseTimer);
      refreshAssistantMini();
      $("#assistantMini").classList.add("show");
      $("#assistantMini").setAttribute("aria-hidden", "false");
      $("#assistantLauncher")?.setAttribute("aria-expanded", "true");
    }

    function closeAssistantMini() {
      clearTimeout(assistantHoverCloseTimer);
      $("#assistantMini").classList.remove("show");
      $("#assistantMini").setAttribute("aria-hidden", "true");
      $("#assistantLauncher")?.setAttribute("aria-expanded", "false");
    }

    function scheduleCloseAssistantMini() {
      clearTimeout(assistantHoverCloseTimer);
      assistantHoverCloseTimer = setTimeout(() => {
        if ($("#assistantDrawer")?.classList.contains("show")) return;
        closeAssistantMini();
      }, 260);
    }

    function bindAssistantHover() {
      const launcher = $("#assistantLauncher");
      const mini = $("#assistantMini");
      if (!launcher || !mini) return;
      const canHover = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
      if (!canHover) return;
      [launcher, mini].forEach((node) => {
        node.addEventListener("mouseenter", () => {
          clearTimeout(assistantHoverCloseTimer);
          if (!$("#assistantDrawer")?.classList.contains("show")) openAssistantMini();
        });
        node.addEventListener("mouseleave", scheduleCloseAssistantMini);
      });
    }

    function bindPointerGlow() {
      const canHover = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (!canHover || reduceMotion) return;

      document.addEventListener("pointermove", (event) => {
        const card = event.target.closest("[data-pointer-glow]");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
        card.classList.add("has-pointer-glow");
      });

      document.addEventListener("pointerout", (event) => {
        const card = event.target.closest("[data-pointer-glow]");
        if (card && !card.contains(event.relatedTarget)) card.classList.remove("has-pointer-glow");
      });
    }

    function openAssistant() {
      closeAssistantMini();
      $("#assistantDrawer").classList.add("show");
      $("#assistantDrawer").setAttribute("aria-hidden", "false");
    }

    function closeAssistant() {
      closeAssistantMini();
      $("#assistantDrawer").classList.remove("show");
      $("#assistantDrawer").setAttribute("aria-hidden", "true");
    }

    function toggleAssistant(trigger = null) {
      if (isAssistantRailVisible()) {
        focusAssistantRail();
        return;
      }
      if ($("#assistantDrawer").classList.contains("show")) {
        closeAssistant();
        return;
      }
      if (trigger?.id === "assistantLauncher" && $("#assistantMini").classList.contains("show")) {
        openAssistant();
        return;
      }
      if ($("#assistantMini").classList.contains("show")) closeAssistantMini();
      else openAssistantMini();
    }

    function closeModal(selector) {
      const modal = $(selector);
      if (!modal) return;
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      if (selector === "#workflowModal") pendingWorkflow = null;
    }

    function closeModals() {
      $$(".modal-backdrop").forEach((modal) => {
        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");
      });
      pendingWorkflow = null;
    }

    function setSyncButtonsState(label, disabled) {
      ["#syncBtn", "#syncBtn2"].forEach((selector) => {
        const button = $(selector);
        if (!button) return;
        button.disabled = disabled;
        button.innerHTML = `<iconify-icon icon="icon-park-outline:${disabled ? "loading-four" : "cloud-sync"}"></iconify-icon>${label}`;
      });
    }

    function startSync() {
      if (syncRunning) return;
      syncRunning = true;
      $("#syncLine").classList.add("show");
      setSyncButtonsState("同步中...", true);
      showToast("正在同步企微潜客数据");
      setTimeout(() => {
        syncSequence += 1;
        const syncedCustomer = {
          name: `同步潜客${String(200 + syncSequence).padStart(3, "0")}`,
          phone: `139****${String(6800 + syncSequence).padStart(4, "0")}`,
          tags: ["水光复购", "待跟进"],
          owner: "李运营",
          time: nowLabel(),
          status: "可触达"
        };
        customers.unshift(syncedCustomer);
        dashboardCustomerTotal += 1;
        dashboardTodayNew += 1;
        memberStats[0].newCustomers += 1;
        animateMetricValue("#customerTotalKpi", dashboardCustomerTotal);
        animateMetricValue("#customerTodayKpi", dashboardTodayNew);
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
        renderSupplementModules();
        recordOperation("同步企微潜客", syncedCustomer.name, "本地 Demo 增量同步 1 位潜客；真实数据待企微接口");
        $("#syncLine").classList.remove("show");
        setSyncButtonsState(`已同步 ${nowLabel().slice(-5)}`, false);
        syncRunning = false;
        showToast(`同步完成：新增 ${syncedCustomer.name}，KPI 与客户列表已更新`);
      }, 1200);
    }

    function switchSubscreen(button) {
      const wrapper = button.closest(".screen");
      if (!wrapper) return;
      const target = button.dataset.subtarget;
      const contentTarget = button.dataset.contentTarget || target;
      wrapper.querySelectorAll(".subnav-button").forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
      wrapper.querySelectorAll(".subscreen").forEach((screen) => {
        screen.classList.toggle("active", screen.dataset.subscreen === contentTarget);
      });
      const screenId = wrapper.id.replace("screen-", "");
      if (screenId === "assets" && button.dataset.assetModule) {
        activeAssetModule = button.dataset.assetModule;
        assetDirFilter = "全部素材";
        assetTypeFilter = "全部";
        assetStatusFilter = "全部状态";
        if (activeAssetModule === "collections") {
          assetScopeFilter = "全部素材";
          assetViewMode = "packs";
        } else if (activeAssetModule === "recycle") {
          assetScopeFilter = "回收站";
          assetViewMode = "list";
        } else {
          assetScopeFilter = "全部素材";
          assetViewMode = "grid";
        }
        renderAssets();
      }
      syncSidebarSubnav(screenId, target);
      refreshAssistantMini();
    }

    function syncAssetModuleTabs(module) {
      const button = document.querySelector(`#screen-assets .subnav-button[data-asset-module="${module}"]`);
      if (!button) return;
      $$("#screen-assets .subnav-button").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        if (isActive) item.setAttribute("aria-current", "page");
        else item.removeAttribute("aria-current");
      });
      lastSubscreenByScreen.assets = button.dataset.subtarget;
    }

    function goScreen(screen) {
      activateScreen(screen);
    }

    function goSubscreen(screen, subtarget) {
      goScreen(screen);
      const button = document.querySelector(`#screen-${screen} [data-subtarget="${subtarget}"]`);
      if (button) switchSubscreen(button);
    }

    function activateScreen(screen) {
      const button = $$(".nav-button").find((item) => item.dataset.screen === screen);
      if (!button) return;
      if (button.classList.contains("locked")) {
        showToast("当前账号无该模块权限，请由管理员编辑权限");
        return;
      }
      $$(".nav-button").forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
      $$(".screen").forEach((node) => node.classList.remove("active"));
      $(`#screen-${screen}`).classList.add("active");
      const rememberedSubtarget = lastSubscreenByScreen[screen];
      const rememberedButton = rememberedSubtarget
        ? document.querySelector(`#screen-${screen} .subnav-button[data-subtarget="${rememberedSubtarget}"]`)
        : null;
      if (rememberedButton && !rememberedButton.classList.contains("active")) switchSubscreen(rememberedButton);
      refreshAssistantMini();
    }

    function syncSidebarSubnav(screen, subtarget) {
      lastSubscreenByScreen[screen] = subtarget;
    }

    function focusTodoPanel() {
      const panel = document.querySelector(".todo-panel");
      if (!panel) return;
      panel.classList.add("focused");
      panel.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => panel.classList.remove("focused"), 1800);
    }

    function openDashboardDrilldown(filter) {
      if (filter === "all") {
        goSubscreen("customers", "customer-list");
        customerFilter = "全部潜客";
        $("#customerSearch").value = "";
        setCustomerTagFilter("全部标签", false);
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
        showToast("已进入客户运营：全部潜客列表");
        return;
      }
      if (filter === "new") {
        goSubscreen("customers", "customer-list");
        customerFilter = "全部潜客";
        $("#customerSearch").value = "07-10";
        setCustomerTagFilter("全部标签", false);
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
        showToast("已进入客户运营：今日新增潜客视图");
        return;
      }
      if (filter === "intent") {
        goSubscreen("customers", "customer-list");
        customerFilter = "高意向";
        $("#customerSearch").value = "";
        setCustomerTagFilter("全部标签", false);
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
        showToast("已进入客户运营：高意向咨询潜客");
        return;
      }
      if (filter === "todo") {
        openTodoPage("pending");
        return;
      }
      if (filter === "risk") {
        goSubscreen("customers", "conversations");
        conversationFilter = "风险会话";
        renderConversationThread();
        showToast("已进入会话跟进：风险/客诉提醒");
      }
    }

    function activateDashboardView(view) {
      $$("[data-dashboard-view]").forEach((button) => button.classList.toggle("active", button.dataset.dashboardView === view));
      if (view === "overview") {
        activateScreen("dashboard");
        renderStores("全部项目");
        requestAnimationFrame(drawTrendChart);
        showToast("已回到经营总览");
        return;
      }
      if (view === "todo") {
        openTodoPage("pending");
        return;
      }
      if (view === "stores") {
        openStoreDataPage();
        return;
      }
      if (view === "done") {
        openTodoPage("done");
        return;
      }
      if (view === "migration") {
        goSubscreen("customers", "migration");
        showToast("已打开客户迁移看板");
      }
    }

    function openStoreDataPage() {
      $$(".screen").forEach((screen) => screen.classList.remove("active"));
      $("#screen-stores")?.classList.add("active");
      renderStores($("#storeDataCategoryFilter")?.value || "全部项目");
      window.scrollTo({ top: 0, behavior: "auto" });
      showToast("已打开全部机构数据");
    }

    function closeStoreDataPage() {
      activateScreen("dashboard");
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function openFollowModal() {
      const item = customers[selectedCustomerIndex] || customers[0];
      $("#followCustomerInput").value = `${item.name} · ${item.phone}`;
      openModal("#followModal");
    }

    function openAssetPreview(title) {
      const asset = assets.find((item) => item.title === title) || assets[0];
      selectedPreviewAsset = asset;
      $("#assetPreviewTitle").textContent = "素材详情";
      let stage = "";
      if (asset.type === "图片" && asset.image) {
        stage = `<button class="asset-content-stage asset-image-stage" data-open-original="${escapeHtml(asset.title)}"><img src="${asset.image}" alt="${escapeHtml(asset.title)}"><span><iconify-icon icon="icon-park-outline:zoom-in"></iconify-icon>查看原图</span></button>`;
      } else if (asset.type === "视频" && asset.video) {
        stage = `<div class="asset-content-stage asset-video-stage"><video controls preload="metadata" poster="${asset.image || ""}" aria-label="${escapeHtml(asset.title)} 视频预览"><source src="${asset.video}" type="video/mp4">当前浏览器不支持视频播放。</video><span class="asset-preview-note">${asset.videoNote}</span></div>`;
      } else if (asset.type === "文本") {
        stage = `<article class="asset-content-stage asset-text-stage"><header><span>正文内容</span><strong>${asset.size}</strong></header><div>${escapeHtml(asset.content || "暂无文案内容").replace(/\n/g, "<br>")}</div></article>`;
      } else if (asset.type === "文件") {
        stage = `<section class="asset-content-stage asset-file-stage"><span class="asset-file-preview-icon"><iconify-icon icon="icon-park-outline:file-pdf"></iconify-icon></span><div><strong>${escapeHtml(asset.fileName || asset.title)}</strong><span>PDF 文档 · ${asset.fileSize || asset.size}</span><p>${escapeHtml(asset.fileDescription || "文件素材，点击后可查看文件信息。")}</p></div></section>`;
      } else {
        stage = `<div class="asset-content-stage"><iconify-icon icon="${asset.icon}"></iconify-icon></div>`;
      }
      $("#assetPreviewBody").innerHTML = `<div class="asset-detail-workspace">${stage}<aside class="asset-detail-sidebar"><div><h3>${escapeHtml(asset.title)}</h3><p>${asset.type} · ${asset.dir} · 使用 ${asset.uses} 次</p>${assetTags(asset.tags, asset.tags.length)}</div><div class="asset-detail-side-list"><div><span>状态</span><strong>${asset.status}</strong></div><div><span>所属素材包</span><strong>${asset.package}</strong></div><div><span>项目 / 渠道</span><strong>${asset.project} · ${asset.channel}</strong></div><div><span>${asset.type === "图片" ? "尺寸" : asset.type === "视频" ? "时长" : asset.type === "文本" ? "字数" : "文件大小"}</span><strong>${asset.type === "文件" ? asset.fileSize || asset.size : asset.size}</strong></div><div><span>创建与更新</span><strong>${asset.creator} · ${asset.updated}</strong></div></div><section class="asset-detail-references"><strong>被引用任务</strong><div class="asset-reference-list">${asset.refs.map((ref) => `<div class="asset-reference-row"><span class="asset-detail-row-icon"><iconify-icon icon="icon-park-outline:link"></iconify-icon></span><div><strong>${escapeHtml(ref)}</strong><span>正在引用此素材</span></div></div>`).join("")}</div></section></aside></div>`;
      const favoriteButton = $("#assetPreviewFavorite");
      favoriteButton.dataset.assetBatchAction = "收藏素材";
      favoriteButton.dataset.assetTitle = asset.title;
      favoriteButton.classList.toggle("is-favorite", Boolean(asset.favorite));
      favoriteButton.title = asset.favorite ? "取消收藏" : "收藏素材";
      favoriteButton.setAttribute("aria-label", asset.favorite ? "取消收藏" : "收藏素材");
      favoriteButton.innerHTML = `<iconify-icon icon="${asset.favorite ? "icon-park-solid:star" : "icon-park-outline:star"}"></iconify-icon><span>${asset.favorite ? "已收藏" : "收藏素材"}</span>`;
      openModal("#assetPreviewModal");
    }

    function openAssetImageLightbox(title) {
      const asset = assets.find((item) => item.title === title);
      if (!asset?.image) return;
      $("#assetImageLightboxTitle").textContent = `${asset.title} · 原图`;
      $("#assetImageLightboxBody").innerHTML = `<img src="${asset.image}" alt="${escapeHtml(asset.title)} 原图">`;
      openModal("#assetImageLightbox");
    }

    function updateAssistantOutput(title, text, tags = [], decision = {}) {
      assistantLastResult = { title, text, tags };
      const html = `
        <strong>${title}</strong>
        <p>${text}</p>
        ${tags.length ? `<div class="tag-wrap">${tags.map((tag) => `<span class="chip ${chipClass(tag)}">${tag}</span>`).join("")}</div>` : ""}
        <div class="ai-decision-grid" aria-label="AI 建议依据">
          <div><span>建议原因</span><strong>${escapeHtml(decision.reason || "结合当前客户阶段、互动热度与运营规则生成")}</strong></div>
          <div><span>风险提示</span><strong>${escapeHtml(decision.risk || "执行前请复核人群、内容与触达频次")}</strong></div>
          <div><span>预计效果</span><strong>${escapeHtml(decision.effect || "可减少人工筛选时间，并提升下一步执行确定性")}</strong></div>
        </div>
      `;
      $("#assistantOutput").innerHTML = html;
      if (isAssistantRailVisible()) focusAssistantRail();
      else openAssistant();
    }

    function threadIdForCustomer(index) {
      const customer = customers[index] || customers[0];
      if (customer.name.includes("张")) return "c1";
      if (customer.name.includes("陈")) return "c2";
      if (customer.name.includes("林")) return "c3";
      return "c3";
    }

    function runAssistantCommand(command) {
      if (command === "wecom-sync") {
        if (wecomSyncStatus === "healthy") {
          openWorkflow({ title: "企微同步日志", hideConfirm: true, cancelLabel: "关闭", body: `<div class="workflow-summary"><strong>同步正常</strong><span>最近一次：刚刚 · 每 30 秒自动同步</span></div><div class="workflow-list"><div class="workflow-list-item"><strong>客户与会话</strong><span>本轮更新 12 条</span></div><div class="workflow-list-item"><strong>待办与风险</strong><span>本轮更新 3 条</span></div></div>` });
        } else {
          openWorkflow({ title: "修复企微连接", confirmLabel: "重新连接", body: `<div class="workflow-external"><strong>${wecomSyncStatus === "error" ? "连接已断开" : "同步存在延迟"}</strong><span>${wecomSyncReason || "请重新连接企微；如授权失效，可在下一步重新授权。"}</span></div>`, onConfirm: () => { setWecomSyncStatus("loading"); setTimeout(() => { setWecomSyncStatus("healthy"); showToast("企微数据更新完成"); }, 1000); } });
        }
        return;
      }
      if (command === "dashboard-risk") {
        runAssistantAction("risk");
        return;
      }
      if (command === "dashboard-risk-detail") {
        openWorkflow({
          title: "张女士｜术后风险档案",
          hideConfirm: true,
          cancelLabel: "关闭",
          body: `<div class="workflow-summary"><strong>高风险 · 已逾期 2小时18分</strong><span>术后水光第 2 天，当前诉求：泛红未退、担心恢复并提出退款咨询。</span></div><div class="workflow-list"><div class="workflow-list-item"><strong>最近订单</strong><span>水光修护套餐 · 2026-07-13 到店 · 已支付</span></div><div class="workflow-list-item"><strong>术后记录</strong><span>昨晚反馈持续泛红；尚未完成医生回访。</span></div><div class="workflow-list-item"><strong>沟通记录</strong><span>10:12 提及退款意向，当前等待人工回复。</span></div></div><div class="workflow-summary"><strong>安抚话术模板</strong><p>张女士您好，我理解您现在的担心。术后 24–48 小时轻微泛红通常属于恢复过程，我已同步门店顾问与医生助理，将在 30 分钟内致电确认您的皮肤状态。期间请先避免热敷、暴晒和刺激性护肤，我们会持续跟进。</p><button class="btn primary" data-assistant-command="dashboard-risk-compose">复制并进入处理</button></div>`
        });
        return;
      }
      if (command === "dashboard-risk-compose") {
        const template = "张女士您好，我理解您现在的担心。术后 24–48 小时轻微泛红通常属于恢复过程，我已同步门店顾问与医生助理，将在 30 分钟内致电确认您的皮肤状态。期间请先避免热敷、暴晒和刺激性护肤，我们会持续跟进。";
        copyText(template);
        closeModal("#workflowModal");
        runAssistantAction("reply");
        showToast("安抚话术已复制并带入风险会话");
        return;
      }
      if (command === "dashboard-approval") {
        handleTodoAction(2);
        updateAssistantOutput("已定位审批中群发", "已进入营销中心并筛选审批中任务，可通过、驳回或终止。", ["审批中", "群发"]);
        return;
      }
      if (command === "dashboard-broadcast") {
        guardMarketingAction("生成群发", () => runAssistantAction("broadcast"));
        return;
      }
      if (command === "customer-batch-tags") {
        runAssistantAction("tags");
        return;
      }
      if (command === "customer-open-thread") {
        openThread(threadIdForCustomer(selectedCustomerIndex));
        updateAssistantOutput("已打开当前潜客会话", "已根据选中潜客定位对应会话，可继续生成回复、风险摘要或添加跟进。", ["会话", "当前潜客"]);
        return;
      }
      if (command === "customer-follow") {
        openFollowModal();
        updateAssistantOutput("已准备跟进记录", "跟进弹窗已按当前选中潜客预填，可补充跟进内容并提交写回客户档案。", ["跟进", "客户档案"]);
        return;
      }
      if (command === "group-open-thread") {
        openThread(selectedGroupId);
        updateAssistantOutput("已打开当前群聊", "已定位当前群聊会话，可直接生成群答疑或复购提醒。", ["群聊", "答疑"]);
        return;
      }
      if (command === "group-broadcast") {
        guardMarketingAction("生成群发", () => runAssistantAction("broadcast"));
        return;
      }
      if (command === "group-tags") {
        tagMode = "batch";
        tagSelection = new Set(["复购群", "活动群"]);
        $("#tagSearchInput").value = "";
        renderTagSelection();
        openModal("#tagModal");
        updateAssistantOutput("已推荐群标签", "已按当前群聊类型预选群运营标签，可确认后应用到群聊档案。", ["复购群", "活动群"]);
        return;
      }
      if (command === "batch-add-submit") {
        $("#submitBatchAdd")?.click();
        updateAssistantOutput("已提交批量加好友任务", "系统将按空闲优先和 30 秒间隔执行，失败号码会进入任务列表等待重试。", ["自动分配", "防风控"]);
        return;
      }
      if (command === "batch-add-check") {
        updateAssistantOutput("号码质量检查完成", "建议过滤重复号码、无效格式和近期已添加客户；执行间隔保持 30 秒以上。", ["号码清洗", "防风控"]);
        return;
      }
      if (command === "marketing-precheck") {
        const task = broadcasts[selectedBroadcastIndex] || broadcasts[0];
        updateAssistantOutput("发送前检查完成", `${task.title} 已排除近 7 天触达对象 38 位，建议保留当前 ${task.sendType || "定时发送"}，素材完整度通过。`, ["防打扰", task.tag]);
        showToast("AI 已完成群发防打扰检查");
        return;
      }
      if (command === "marketing-detail") {
        renderBroadcastDetail(selectedBroadcastIndex);
        updateAssistantOutput("已解释当前群发任务", "右侧任务详情已同步当前选中群发，重点关注目标数、失败数和完成率。", ["任务详情"]);
        return;
      }
      if (command === "marketing-run") {
        guardMarketingAction("执行群发", () => {
          runBroadcast(selectedBroadcastIndex);
          updateAssistantOutput("已执行当前群发任务", "任务状态已回写到群发列表；若存在失败目标，可继续点击重试失败。", ["执行回写"]);
        });
        return;
      }
      if (command === "asset-governance") {
        if ($("#tagGovernanceText")) {
          $("#tagGovernanceText").textContent = "已识别 2 组疑似重复标签，建议合并「高意向/高意向咨询」，并清理停用未使用标签。";
        }
        updateAssistantOutput("已生成素材/标签建议", "已将治理建议写入当前页面，可继续应用标签或生成复购文案。", ["标签治理", "素材复用"]);
        showToast("AI 已生成治理建议");
        return;
      }
      if (command === "asset-apply-tag") {
        runAssistantAction("tags");
        return;
      }
      if (command === "asset-generate-copy") {
        goSubscreen("ai", "ai-copy");
        $("#aiCopyInput").value = "基于水光复购文案和老客权益图，生成一条七夕复购朋友圈文案";
        addAiCopyRecord("七夕水光复购文案", "七夕肌肤补水季开启，老客可保留原方案权益，并赠送一次皮肤检测。回复 1 帮您锁定本周名额。");
        updateAssistantOutput("已生成复购文案", "文案已写入 AI 文案生成结果卡片，可复制后用于朋友圈或群发任务。", ["水光复购", "朋友圈"]);
        return;
      }
      if (command === "ai-copy-generate") {
        $("#generateAiCopy")?.click();
        updateAssistantOutput("已执行文案生成", "当前输入已生成可用于群发或朋友圈的运营文案。", ["文案生成"]);
        return;
      }
      if (command === "ai-fraud-task") {
        goSubscreen("ai", "ai-fraud");
        updateAssistantOutput("已准备防刷任务", "建议开启同设备/IP、10 分钟高频参与和注册时长规则，命中后自动加入黑名单。", ["活动防刷", "外部依赖"]);
        return;
      }
      if (command === "ai-config-check") {
        updateAssistantOutput("模型配置检查", "文案生成和风险摘要需要外部 AI 模型接口；当前 demo 已标记外部依赖，开发时需接入模型服务与审计日志。", ["外部依赖", "模型接口"]);
        return;
      }
      if (command === "data-anomaly") {
        updateAssistantOutput("数据波动解释", "近 7 天高意向咨询增长，但预约转化低于复购标签触达，建议补发皮肤检测引导并给沉默客户建立唤醒任务。", ["数据异常", "转化建议"]);
        return;
      }
      if (command === "data-task") {
        todos.unshift({ title: "数据异常跟进 - 高意向转化", desc: "补发皮肤检测引导，今日 18:00 前完成", tag: "高", type: "去处理", route: "intent-customers" });
        renderTodos();
        updateAssistantOutput("已生成数据运营待办", "已把高意向转化异常写入工作台待办，可回到工作台查看并继续处理。", ["待办", "数据中心"]);
        return;
      }
      if (command === "data-export") {
        $("#exportDataReport")?.click();
        updateAssistantOutput("已生成数据报告", "成员、直播、一客一码和操作日志已汇总为报表，可作为运营复盘材料。", ["数据报告"]);
        return;
      }
      if (command === "system-permission-audit") {
        updateAssistantOutput("权限风险检查完成", "建议保持内容运营仅管理素材与标签，风控审核员仅查看风险会话；员工权限变更需保留操作日志。", ["权限检查", "数据范围"]);
        return;
      }
      if (command === "system-switch-preview") {
        renderAccounts();
        openModal("#accountSwitchModal");
        updateAssistantOutput("已打开账号切换预览", "可切换 admin / manager / operator / content / auditor 角色查看菜单和数据范围差异。", ["账号切换"]);
        return;
      }
      if (command === "system-edit-current") {
        openAccountEditor(currentAccountId);
        updateAssistantOutput("已打开当前账号权限编辑", "可编辑角色、数据范围和可见模块，保存后会回写到系统管理表格和左侧菜单权限。", ["权限编辑"]);
      }
    }

    function runAssistantAction(action) {
      if (action === "reply") {
        goSubscreen("customers", "conversations");
        activeThreadId = "c1";
        conversationFilter = "风险会话";
        renderConversationThread();
        $("#replyInput").value = "张女士您好，我理解您现在比较担心。术后 24-48 小时轻微泛红属于常见恢复反应，我已为您同步门店顾问和医生助理，30 分钟内会电话确认皮肤状态；在此之前请先避免热敷、暴晒和刺激性护肤。";
        updateAssistantOutput("已生成风险会话回复", "回复已写入张女士单客会话输入框，可检查后点击发送，并在右侧提交处置结果。", ["客诉敏感", "术后回访"], { reason: "识别到退款与担心等客诉关键词，且术后回访已逾期", risk: "不得承诺诊疗结果；涉及不适须升级顾问与医生助理", effect: "预计在 30 分钟内完成首次安抚并降低投诉升级概率" });
        showToast("AI 已生成单客会话回复");
        return;
      }
      if (action === "broadcast") {
        resetBroadcastWizard();
        $("#broadcastTitleInput").value = "水光复购老客权益提醒";
        $("#broadcastContentInput").value = "您好，根据您上次水光护理后的皮肤状态，本周可安排一次补水修护复购方案。老客可保留原方案权益，并赠送一次皮肤检测；如需预约，我可以帮您确认门店档期。";
        $("#broadcastTagInput").value = "水光复购";
        $("#broadcastTimeInput").value = "2026-07-10T16:30";
        renderBroadcastWizard();
        openModal("#wizardModal");
        updateAssistantOutput("已生成群发草稿", "已根据水光复购标签生成触达文案、目标标签和建议发送时间，进入向导后可继续选择对象和发送方式。", ["水光复购", "老客"], { reason: "水光护理后 28–35 天是复购与复测的高相关窗口", risk: "已建议排除 7 天内触达客户，发送前需复核权益与用语", effect: "预计带来 38–52 次预约咨询" });
        showToast("AI 已生成群发任务草稿");
        return;
      }
      if (action === "tags") {
        tagMode = "batch";
        tagSelection = new Set(["水光复购", "高意向咨询", "术后回访"]);
        $("#tagSearchInput").value = "";
        renderTagSelection();
        openModal("#tagModal");
        updateAssistantOutput("已推荐标签组合", "系统根据已选潜客、会话意图和近期复购节点推荐 3 个标签，可确认后批量写回客户档案。", ["水光复购", "高意向咨询", "术后回访"], { reason: "综合客户近期对话、项目偏好与服务节点", risk: "人工确认后才写回标签，避免覆盖既有客户分层", effect: "提高后续人群圈选准确性" });
        showToast("AI 已推荐标签");
        return;
      }
      if (action === "risk") {
        goSubscreen("customers", "conversations");
        activeThreadId = "c1";
        conversationFilter = "风险会话";
        renderConversationThread();
        updateAssistantOutput("风险摘要", "张女士提到退款和担心，建议优先由门店顾问回电；处理口径应先安抚情绪，再解释术后恢复周期，并承诺明确回访时间。", ["风险", "客诉敏感"], { reason: "检测到退款意向、负面情绪与超时未处理", risk: "需由人工确认处置口径，不自动发送医疗承诺", effect: "优先处理可降低客诉升级与流失风险" });
        showToast("AI 已打开风险会话并生成摘要");
      }
    }

    function handleTodoAction(index) {
      const todo = todos[index];
      if (!todo) return;
      if (todo.route === "thread-c1") {
        openThread("c1");
        showToast("已进入张女士术后回访会话，请在右侧提交处置或直接回复");
        return;
      }
      if (todo.route === "intent-customers") {
        activateScreen("customers");
        const customerButton = document.querySelector('[data-subtarget="customer-list"]');
        if (customerButton) switchSubscreen(customerButton);
        customerFilter = "高意向";
        $("#customerSearch").value = "";
        setCustomerTagFilter("全部标签", false);
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
        showToast("已筛选高意向潜客，可继续查看资料或添加跟进");
        return;
      }
      if (todo.route === "broadcast-approval") {
        activateScreen("marketing");
        const broadcastButton = document.querySelector('[data-subtarget="broadcast"]');
        if (broadcastButton) switchSubscreen(broadcastButton);
        broadcastFilter = "审批中";
        renderBroadcasts();
        showToast("已进入审批中群发任务，可处理通过、驳回或终止");
        return;
      }
      if (todo.route === "broadcast-running") {
        activateScreen("marketing");
        const broadcastButton = document.querySelector('[data-subtarget="broadcast"]');
        if (broadcastButton) switchSubscreen(broadcastButton);
        broadcastFilter = "发送中";
        renderBroadcasts();
        showToast("已进入发送中群发任务，可暂停、继续或终止");
        return;
      }
      if (todo.route === "asset-review") {
        activateScreen("assets");
        const assetButton = document.querySelector('#screen-assets [data-subtarget="asset-library"]');
        if (assetButton) switchSubscreen(assetButton);
        showToast("已进入素材库，可继续审核项目图文素材");
      }
    }

    function selectImportMethod(method, trigger) {
      if (method === "下载模板") {
        downloadTextFile(
          "批量加好友导入模板.csv",
          "手机号,姓名,标签,归属员工\n13800138000,张女士,高意向,李运营\n",
          "text/csv;charset=utf-8"
        );
        recordOperation("下载模板", "批量加好友", "手机号导入 CSV 模板");
        showToast("导入模板已下载");
        return;
      }
      if (method === "文本粘贴") {
        $$('[data-import-method]').forEach((button) => button.classList.toggle("active", button === trigger));
        $("#phoneList").removeAttribute("readonly");
        $("#phoneList").focus();
        $("#phonePreview").textContent = "请按行粘贴手机号，提交时会自动过滤无效号码";
        return;
      }
      openWorkflow({
        title: "上传手机号 CSV",
        confirmLabel: "解析文件",
        body: `
          <div class="workflow-summary"><strong>导入字段</strong><span>支持模板中的手机号、姓名、标签和归属员工；演示数据会先解析到左侧文本框，确认无误后再提交任务。</span></div>
          <div class="form-row"><label for="batchCsvFile">选择 CSV 文件</label><input class="field" type="file" id="batchCsvFile" accept=".csv,text/csv"></div>
          <div class="workflow-list"><div class="workflow-list-item"><strong>本地解析</strong><span>文件仅在浏览器内读取，不会上传到外部服务。</span></div></div>
        `,
        onConfirm: async () => {
          const file = $("#batchCsvFile")?.files?.[0];
          if (!file) { showToast("请先选择 CSV 文件"); return false; }
          const content = await file.text();
          const rows = content.replace(/^\uFEFF/, "").split(/\r?\n/).map((row) => row.trim()).filter(Boolean);
          const phones = rows.map((row) => row.split(",")[0].trim()).filter((value) => /^1\d{10}$/.test(value));
          if (!phones.length) { showToast("文件中没有可识别的手机号"); return false; }
          $("#phoneList").value = phones.join("\n");
          $("#phoneList").removeAttribute("readonly");
          $("#phonePreview").textContent = `已从 ${file.name} 解析 ${phones.length} 条记录，可继续编辑后提交`;
          $$('[data-import-method]').forEach((button) => button.classList.toggle("active", button === trigger));
          recordOperation("导入数据", "批量加好友", `${file.name} · ${phones.length} 条记录`);
          showToast(`已解析 ${phones.length} 条手机号记录`);
        }
      });
    }

    $$(".nav-button").forEach((button) => {
      button.addEventListener("click", () => {
        activateScreen(button.dataset.screen);
      });
    });

    $("#workflowConfirm").addEventListener("click", async () => {
      const handler = pendingWorkflow;
      if (typeof handler !== "function") {
        closeModal("#workflowModal");
        return;
      }
      const button = $("#workflowConfirm");
      const originalLabel = button.textContent;
      button.disabled = true;
      button.textContent = "处理中...";
      try {
        const result = await handler();
        if (result !== false) closeModal("#workflowModal");
      } finally {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && $(".modal-backdrop.show")) closeModals();
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("#tagFilterSelect")) $("#tagFilterSelect")?.classList.remove("open");
      if (!event.target.closest("#scopeSelectBox")) $("#scopeSelectBox")?.classList.remove("open");
      if (!event.target.closest("#broadcastTagSelector")) $("#broadcastTagMenu")?.setAttribute("hidden", "");
      if (!event.target.closest("#blacklistCustomerSelectBox") && !event.target.closest("#blacklistReasonSelectBox")) closeBlacklistSelects();
      if (!event.target.closest(".more-actions")) $$(".more-actions.open").forEach((item) => item.classList.remove("open"));
      if (event.target.classList?.contains("modal-backdrop") && event.target.classList.contains("show")) {
        if (["wizardModal", "broadcastActionModal"].includes(event.target.id)) return;
        closeModal(`#${event.target.id}`);
        return;
      }
      const target = event.target.closest(".kpi, [data-broadcast-filter-mode], [data-toggle-assistant], [data-toggle-assistant-rail], [data-close-assistant], [data-close-assistant-mini], [data-expand-assistant], [data-ai-action], [data-thread-ai-action], [data-assistant-command], [data-dashboard-view], [data-open-store-data], [data-close-store-data], [data-close-todo-page], [data-open-todo-page], [data-todo-page-filter], [data-customer-filter], [data-conversation-filter], [data-show-conversation-record], [data-broadcast-filter], [data-import-method], [data-open-follow], [data-open-tags], [data-open-tag-editor], [data-open-tag-group-editor], [data-edit-managed-tag], [data-toggle-managed-tag], [data-delete-managed-tag], [data-apply-managed-tag], [data-toggle-tag-actions], [data-remove-blacklist], [data-blacklist-customer-option], [data-blacklist-reason-option], [data-view-channel], [data-view-form], [data-run-tag-group], [data-view-moment], [data-use-script], [data-download-promo], [data-radar-tag], [data-block-fraud], [data-open-live], [data-open-wizard], [data-open-upload], [data-open-original], [data-preview-asset], [data-package-sort], [data-asset-favorite], [data-asset-type], [data-asset-status], [data-asset-scope], [data-asset-dir], [data-asset-view], [data-reset-asset-filters], [data-create-asset-package], [data-asset-package-draft-select], [data-asset-package], [data-edit-asset-package], [data-asset-open], [data-asset-select], [data-clear-asset-selection], [data-open-medical-sop], [data-open-wizard], [data-open-upload], [data-open-medical-sop], [data-run-today-operation], [data-close-asset-drawer], [data-asset-batch-action], [data-toggle-broadcast-asset], [data-insert-broadcast-variable], [data-time-preset], [data-send-now], [data-broadcast-template], [data-tag-scope], [data-toggle-tag-filter], [data-tag-filter-option], [data-toggle-scope-filter], [data-scope-option], [data-close-modal], [data-finish-todo], [data-open-thread], [data-open-customer-thread], [data-thread-id], [data-group-detail], [data-switch-account], [data-edit-account], [data-toggle-account], [data-run-broadcast], [data-retry-broadcast], [data-detail-broadcast], [data-submit-broadcast], [data-open-approval], [data-approval-choice], [data-remind-broadcast], [data-edit-broadcast], [data-terminate-broadcast], [data-pause-broadcast], [data-review-broadcast], [data-copy-broadcast], [data-export-broadcast], [data-archive-broadcast], #assetPackageCreateNext, #assetPackageCreatePrev, #assetPackageCreateConfirm, #viewBroadcastRecipients, #toggleBroadcastTags, [data-broadcast-tag], [data-remove-broadcast-tag], [data-target-type], [data-send-type], [data-operator-choice], .subnav-button, tr[data-customer], tr[data-broadcast-row], tr[data-group-row], tr[data-form-row]");
      if (!target) return;
      if (target.matches("[data-toggle-tag-actions]")) {
        const wrapper = target.closest(".more-actions");
        const shouldOpen = !wrapper?.classList.contains("open");
        $$(".more-actions.open").forEach((item) => item.classList.remove("open"));
        wrapper?.classList.toggle("open", shouldOpen);
      }
      if (target.matches("[data-toggle-assistant]")) toggleAssistant(target);
      if (target.matches("[data-toggle-assistant-rail]")) setAssistantRailCollapsed(!$("#appContent")?.classList.contains("assistant-rail-collapsed"));
      if (target.matches("[data-close-assistant]")) closeAssistant();
      if (target.matches("[data-close-assistant-mini]")) closeAssistantMini();
      if (target.matches("[data-expand-assistant]")) openAssistant();
      if (target.matches(".kpi")) openDashboardDrilldown(target.dataset.filter);
      if (target.matches("[data-ai-action]")) runAssistantAction(target.dataset.aiAction);
      if (target.matches("[data-open-medical-sop]")) openMedicalSop(target.dataset.openMedicalSop);
      if (target.matches("[data-run-today-operation]")) {
        const item = todayOperations.find((operation) => operation.id === target.dataset.runTodayOperation);
        if (!item) return;
        if (item.route === "sop-hydration") openMedicalSop("hydration");
        else if (item.route === "broadcast") { activateScreen("marketing"); renderBroadcastDetail(0); showToast("已打开群发任务详情"); }
        else runAssistantAction(item.route);
      }
      if (target.matches("[data-thread-ai-action]")) applyThreadAiAction(target.dataset.threadAiAction);
      if (target.matches("[data-assistant-command]")) runAssistantCommand(target.dataset.assistantCommand);
      if (target.matches("[data-dashboard-view]")) activateDashboardView(target.dataset.dashboardView);
      if (target.matches("[data-open-store-data]")) openStoreDataPage();
      if (target.matches("[data-close-store-data]")) closeStoreDataPage();
      if (target.matches("[data-close-todo-page]")) closeTodoPage();
      if (target.matches("[data-open-todo-page]")) openTodoPage(target.dataset.openTodoPage);
      if (target.matches("[data-todo-page-filter]")) {
        todoPageFilter = target.dataset.todoPageFilter;
        renderTodoPage();
      }
      if (target.matches("[data-customer-filter]")) {
        customerFilter = target.dataset.customerFilter;
        resetCustomerPage();
        renderCustomers(selectedCustomerIndex);
        showToast(`已筛选：${customerFilter}`);
      }
      if (target.matches("[data-toggle-tag-filter]")) {
        $("#tagFilterSelect").classList.toggle("open");
      }
      if (target.matches("[data-tag-filter-option]")) {
        $("#tagFilterSelect").classList.remove("open");
        setCustomerTagFilter(target.dataset.tagFilterOption);
        showToast(`已筛选标签：${target.dataset.tagFilterOption}`);
      }
      if (target.matches("[data-toggle-scope-filter]")) {
        $("#scopeSelectBox").classList.toggle("open");
      }
      if (target.matches("[data-scope-option]")) {
        $("#scopeSelectBox").classList.remove("open");
        ensureScopeOption(target.dataset.scopeOption);
        showToast(`已切换到：${target.dataset.scopeOption}`);
      }
      const conversationFilterButton = target.closest("[data-conversation-filter]");
      if (conversationFilterButton) {
        conversationFilter = conversationFilterButton.dataset.conversationFilter;
        renderConversationThread();
        showToast(`已筛选：${conversationFilter}`);
      }
      if (target.closest("[data-show-conversation-record]")) {
        const thread = currentThread();
        updateAssistantOutput("完整会话记录已汇总", `${thread.title} 近 7 天共有 ${thread.messages.length} 条关键消息，已提取风险点、处理承诺和待补充备注。`, [thread.side.project, thread.side.risk === "无" ? "无风险" : `${thread.side.risk}风险`]);
        openAssistant();
        showToast("已生成完整会话记录摘要");
      }
      if (target.matches("[data-open-customer-from-thread]")) {
        const thread = currentThread();
        const index = customers.findIndex((customer) => customer.name === thread.title);
        if (index >= 0) {
          selectedCustomerIndex = index;
          customerFilter = "全部潜客";
          resetCustomerPage();
          const customerButton = document.querySelector('#screen-customers .subnav-button[data-subtarget="customer-list"]');
          if (customerButton) switchSubscreen(customerButton);
          openCustomerDetail(index);
          showToast(`已打开 ${thread.title} 的客户详情`);
        } else {
          showToast("当前群聊没有单独客户档案");
        }
      }
      if (target.matches("[data-show-broadcast-risk]")) {
        openWorkflow({
          title: "自动排除规则",
          hideConfirm: true,
          cancelLabel: "关闭",
          body: `<div class="workflow-summary"><strong>本次群发已启用自动保护</strong><span>以下对象不会进入发送名单，可在筛选步骤调整后再次核对。</span></div><div class="workflow-list"><div class="workflow-list-item"><strong>近 7 天已触达</strong><span>排除 24 位客户</span></div><div class="workflow-list-item"><strong>黑名单客户</strong><span>排除 8 位客户</span></div><div class="workflow-list-item"><strong>术后风险 / 逾期回访</strong><span>排除 6 位客户</span></div></div>`
        });
      }
      if (target.matches("[data-open-thread-follow]")) {
        const thread = currentThread();
        const index = customers.findIndex((customer) => customer.name === thread.title);
        if (index >= 0) {
          selectedCustomerIndex = index;
          openFollowModal();
        } else {
          showToast("当前群聊请在群聊管理中创建运营待办");
        }
      }
      if (target.matches("[data-broadcast-filter]")) {
        broadcastFilter = target.dataset.broadcastFilter;
        renderBroadcasts();
        showToast(`已筛选群发任务：${broadcastFilter}`);
      }
      if (target.matches("[data-import-method]")) {
        selectImportMethod(target.dataset.importMethod, target);
      }
      if (target.matches("[data-open-follow]")) openFollowModal();
      if (target.matches("[data-open-tags]")) openTagModal(target);
      if (target.matches("[data-tag-scope]")) {
        tagTargetScope = target.dataset.tagScope;
        renderTagSelection();
        showToast(`已选择打标对象：${tagScopeLabel()}`);
      }
      if (target.matches("[data-open-tag-editor]")) openTagEditor();
      if (target.matches("[data-open-tag-group-editor]")) openTagGroupEditor();
      if (target.matches("[data-edit-managed-tag]")) openTagEditor(target.dataset.editManagedTag);
      if (target.matches("[data-toggle-managed-tag]")) {
        const tag = tagCatalog.find((item) => item.id === target.dataset.toggleManagedTag);
        if (tag) {
          tag.status = tag.status === "启用" ? "停用" : "启用";
          tag.updated = "刚刚";
          renderTagManagement();
          showToast(`标签「${tag.name}」已${tag.status}`);
        }
      }
      if (target.matches("[data-delete-managed-tag]")) {
        const tag = tagCatalog.find((item) => item.id === target.dataset.deleteManagedTag);
        if (tag) {
          tagCatalog = tagCatalog.filter((item) => item.id !== tag.id);
          customers.forEach((customer) => {
            customer.tags = customer.tags.filter((item) => item !== tag.name);
          });
          groups.forEach((group) => {
            const remainingTags = groupTagNames(group).filter((item) => item !== tag.name);
            group.tags = remainingTags;
            group.tag = remainingTags[0] || "未分组";
          });
          renderTagManagement();
          renderCustomers(selectedCustomerIndex);
          renderGroups();
          showToast(`已删除标签「${tag.name}」并同步清理引用`);
        }
      }
      if (target.matches("[data-apply-managed-tag]")) {
        const tag = tagCatalog.find((item) => item.id === target.dataset.applyManagedTag);
        if (tag) {
          const targetIndexes = checkedCustomerIndexes.size ? Array.from(checkedCustomerIndexes) : [selectedCustomerIndex];
          targetIndexes.forEach((index) => {
            const customer = customers[index];
            if (customer && !customer.tags.includes(tag.name)) customer.tags.push(tag.name);
          });
          tag.updated = "刚刚";
          renderTagManagement();
          renderCustomers(selectedCustomerIndex);
          showToast(`已将「${tag.name}」应用到 ${targetIndexes.length} 位潜客`);
        }
      }
      if (target.matches("[data-remove-blacklist]")) {
        const [item] = blacklist.splice(Number(target.dataset.removeBlacklist), 1);
        renderSupplementModules();
        renderCustomers(selectedCustomerIndex);
        showToast(`${item?.customer || "客户"} 已移出黑名单`);
      }
      if (target.matches("[data-toggle-blacklist-select]")) {
        const box = target.dataset.toggleBlacklistSelect === "reason" ? $("#blacklistReasonSelectBox") : $("#blacklistCustomerSelectBox");
        const shouldOpen = !box.classList.contains("open");
        closeBlacklistSelects();
        box.classList.toggle("open", shouldOpen);
      }
      if (target.matches("[data-blacklist-customer-option]")) {
        $("#blacklistCustomerSelect").value = target.dataset.blacklistCustomerOption;
        renderBlacklistCustomerSelect();
        closeBlacklistSelects();
        updateBlacklistPreview();
      }
      if (target.matches("[data-blacklist-reason-option]")) {
        $("#blacklistReasonInput").value = target.dataset.blacklistReasonOption;
        renderBlacklistReasonSelect();
        closeBlacklistSelects();
        updateBlacklistPreview();
      }
      if (target.matches("[data-view-channel]")) {
        const item = channelCodes[Number(target.dataset.viewChannel)];
        if (item) {
          $("#channelDetailTitle").textContent = item.name;
          $("#channelTodayStat").textContent = item.today;
          $("#channelTotalStat").textContent = item.total.toLocaleString();
          $("#channelStaffStat").textContent = `${item.assign} · 李运营 ${Math.round(item.total * .42)}人 · 王专员 ${Math.round(item.total * .38)}人 · 赵运营 ${Math.round(item.total * .2)}人`;
          showToast(`已打开「${item.name}」活码统计`);
        }
      }
      if (target.matches("[data-view-form]")) {
        renderCustomFormData(Number(target.dataset.viewForm));
        showToast("已打开表单提交数据");
      }
      if (target.matches("[data-run-tag-group]")) {
        handleTagGroupTask(Number(target.dataset.runTagGroup));
      }
      if (target.matches("[data-view-moment]")) {
        const item = moments[Number(target.dataset.viewMoment)];
        if (item) {
          $("#momentDetailTitle").textContent = item.title;
          $("#momentViewStat").textContent = item.views;
          $("#momentTagStat").textContent = item.tags;
          showToast(`已打开朋友圈「${item.title}」查看客户`);
        }
      }
      if (target.matches("[data-use-script]")) {
        const item = scripts[Number(target.dataset.useScript)];
        if (item) {
          $("#scriptDraft").value = item.content;
          item.uses += 1;
          renderSupplementModules();
          goSubscreen("customers", "conversations");
          $("#replyInput").value = item.content;
          showToast(`已调用「${item.title}」并写入当前会话`);
        }
      }
      if (target.matches("[data-download-promo]")) {
        const item = promos.find((promo) => promo.name === target.dataset.downloadPromo);
        if (item) {
          openWorkflow({
            title: `导出推广码 · ${item.name}`,
            confirmLabel: "下载配置",
            body: `
              <div class="workflow-summary"><strong>${escapeHtml(item.name)}</strong><span>扫码 ${item.scans} · 转化 ${item.converts} · 自动标签 ${escapeHtml(item.tag || `渠道_${item.name.slice(0, 4)}`)}</span></div>
              <div class="workflow-external"><strong>二维码图片需要活码服务</strong><span>当前可下载落地页、追踪字段和自动标签配置，用于后续接口联调。</span></div>
            `,
            onConfirm: () => {
              downloadTextFile(`推广码-${item.name}.json`, JSON.stringify({ ...item, externalDependency: "企业微信渠道活码服务" }, null, 2));
              recordOperation("导出推广码配置", item.name, "本地 JSON 已下载；二维码图片待外部服务");
              showToast("推广码配置已下载");
            }
          });
        }
      }
      if (target.matches("[data-radar-tag]")) {
        const item = radars[Number(target.dataset.radarTag)];
        if (item) {
          ensureManagedTag(item.tag);
          customers.slice(0, 5).forEach((customer) => {
            if (!customer.tags.includes(item.tag)) customer.tags.push(item.tag);
          });
          renderTagManagement();
          renderCustomers(selectedCustomerIndex);
          showToast(`已为最近打开客户添加「${item.tag}」`);
        }
      }
      if (target.matches("[data-block-fraud]")) {
        const task = fraudTasks[Number(target.dataset.blockFraud)];
        if (task) {
          const candidates = customers.filter((customer) => !blacklist.some((item) => item.customer === customer.name)).slice(0, 3);
          openWorkflow({
            title: `拦截明细 · ${task.name}`,
            confirmLabel: "加入活动黑名单",
            body: `
              <div class="workflow-summary"><strong>累计拦截 ${task.blocked} 个高风险账号</strong><span>以下为本次待复核样本，确认后会写入黑名单并保留操作记录。</span></div>
              <div class="workflow-list">${candidates.map((customer) => `<div class="workflow-list-item"><strong>${escapeHtml(customer.name)}</strong><span>${escapeHtml(customer.phone)} · 疑似频繁领取</span></div>`).join("")}</div>
            `,
            onConfirm: () => {
              candidates.forEach((customer) => blacklist.unshift({ customer: customer.name, reason: "活动防刷拦截", time: nowLabel(), operator: currentAccount().name }));
              renderSupplementModules();
              renderCustomers(selectedCustomerIndex);
              recordOperation("防刷加入黑名单", task.name, `${candidates.length} 位客户`);
              showToast(`已将 ${candidates.length} 位客户加入活动黑名单`);
            }
          });
        }
      }
      if (target.matches("[data-open-live]")) {
        selectedLiveTitle = target.dataset.openLive;
        renderLiveViewerPanel();
        showToast(`已打开「${selectedLiveTitle}」观看客户列表，可批量打标签`);
      }
      if (target.matches("[data-open-wizard]")) {
        broadcastSource = target.dataset.broadcastSource || "all";
        resetBroadcastWizard();
        openModal("#wizardModal");
      }
      if (target.matches("[data-open-upload]")) {
        resetUploadForm(target.dataset.uploadContext || "library");
        openModal("#uploadModal");
      }
      if (target.matches("[data-preview-asset]")) openAssetPreview(target.dataset.previewAsset || "");
      if (target.matches("[data-package-sort]")) {
        const key = target.dataset.packageSort;
        assetPackageSort = { key, direction: assetPackageSort.key === key && assetPackageSort.direction === "desc" ? "asc" : "desc" };
        openAssetPackagePreview(selectedAssetPackage);
      }
      if (target.matches("[data-open-original]")) openAssetImageLightbox(target.dataset.openOriginal);
      if (target.matches("[data-asset-favorite]")) {
        const asset = assets.find((item) => item.title === target.dataset.assetFavorite);
        if (!asset) return;
        asset.favorite = !asset.favorite;
        renderAssets();
        recordOperation(asset.favorite ? "收藏素材" : "取消收藏", asset.title, "素材收藏状态已回写");
        showToast(asset.favorite ? `已收藏「${asset.title}」` : `已取消收藏「${asset.title}」`);
        return;
      }
      if (target.matches("[data-asset-scope]")) {
        assetScopeFilter = target.dataset.assetScope;
        if (assetScopeFilter === "回收站") {
          activeAssetModule = "recycle";
          assetStatusFilter = "全部状态";
          assetViewMode = "list";
          syncAssetModuleTabs("recycle");
        } else if (assetScopeFilter === "待审核") assetStatusFilter = "待审核";
        else if (assetScopeFilter === "已过期") assetStatusFilter = "已过期";
        else if (assetStatusFilter === "待审核" || assetStatusFilter === "已过期") assetStatusFilter = "全部状态";
        if (assetScopeFilter !== "回收站" && activeAssetModule === "recycle") {
          activeAssetModule = "library";
          syncAssetModuleTabs("library");
        }
        renderAssets();
        showToast(`已切换素材范围：${assetScopeFilter}`);
      }
      if (target.matches("[data-asset-status]")) {
        assetStatusFilter = target.dataset.assetStatus;
        renderAssets();
        showToast(`已筛选状态：${assetStatusFilter}`);
      }
      if (target.matches("[data-asset-view]")) {
        assetViewMode = target.dataset.assetView;
        renderAssets();
        showToast(`已切换${target.textContent.trim()}`);
      }
      if (target.matches("[data-reset-asset-filters]")) {
        activeAssetModule = "library";
        assetScopeFilter = "全部素材";
        assetDirFilter = "全部素材";
        assetTypeFilter = "全部";
        assetStatusFilter = "全部状态";
        assetViewMode = "grid";
        syncAssetModuleTabs("library");
        $("#assetSearchInput").value = "";
        renderAssets();
        showToast("已重置素材筛选");
      }
      if (target.matches("[data-create-asset-package]")) {
        openAssetPackageCreate();
      }
      if (target.matches("[data-asset-package-draft-select]")) {
        const title = target.dataset.assetPackageDraftSelect;
        if (target.checked) assetPackageDraftTitles.add(title);
        else assetPackageDraftTitles.delete(title);
        renderAssetPackageCreate();
      }
      if (target.matches("#assetPackageCreateNext")) {
        advanceAssetPackageCreate(1);
      }
      if (target.matches("#assetPackageCreatePrev")) {
        advanceAssetPackageCreate(-1);
      }
      if (target.matches("#assetPackageCreateConfirm")) {
        createAssetPackage();
      }
      if (target.matches("[data-asset-package]")) {
        if (event.target.closest("[data-asset-batch-action]")) return;
        openAssetPackagePreview(target.dataset.assetPackage);
      }
      if (target.matches("[data-edit-asset-package]")) openAssetPackageEditor(target.dataset.editAssetPackage);
      if (target.matches("[data-asset-select]")) {
        const title = target.dataset.assetSelect;
        if (target.checked) selectedAssetTitles.add(title);
        else selectedAssetTitles.delete(title);
        renderAssets();
        refreshAssistantMini();
      }
      if (target.matches("[data-clear-asset-selection]")) {
        selectedAssetTitles.clear();
        renderAssets();
        showToast("已清空素材选择");
      }
      if (target.matches("[data-asset-open]")) {
        if (event.target.closest("[data-asset-select], [data-asset-favorite], [data-preview-asset], [data-create-asset-package]")) return;
        openAssetPreview(target.dataset.assetOpen);
      }
      if (target.matches("[data-close-asset-drawer]")) {
        selectedAssetTitle = "";
        selectedAssetPackageDetail = "";
        $("#assetDetailDrawer")?.classList.remove("show");
        renderAssets();
      }
      if (target.matches("[data-asset-batch-action]")) {
        const action = target.dataset.assetBatchAction;
        handleAssetBatchAction(action, target);
      }
      if (target.matches("[data-toggle-broadcast-asset]")) {
        const title = target.dataset.toggleBroadcastAsset;
        if (selectedBroadcastAssets.has(title)) selectedBroadcastAssets.delete(title);
        else selectedBroadcastAssets.add(title);
        renderBroadcastWizard();
        showToast(selectedBroadcastAssets.has(title) ? `已选入群发素材：${title}` : `已移除群发素材：${title}`);
      }
      if (target.matches("[data-asset-type]")) {
        assetTypeFilter = target.dataset.assetType;
        renderAssets();
        showToast(`已筛选${assetTypeFilter}素材`);
      }
      if (target.matches("[data-asset-dir]")) {
        assetDirFilter = target.dataset.assetDir;
        assetScopeFilter = "全部素材";
        renderAssets();
        showToast(`已切换素材目录：${assetDirFilter}`);
      }
      if (target.matches("[data-close-modal]")) closeModal(`#${target.closest(".modal-backdrop")?.id}`);
      if (target.matches(".subnav-button")) switchSubscreen(target);
      if (target.matches("[data-open-thread]")) openThread(target.dataset.openThread);
      if (target.matches("[data-open-customer-thread]")) openCustomerThread(Number(target.dataset.openCustomerThread));
      if (target.matches("[data-thread-id]")) {
        activeThreadId = target.dataset.threadId;
        conversationDetailTab = "record";
        renderConversationThread();
      }
      if (target.matches("[data-switch-account]")) switchAccount(target.dataset.switchAccount);
      if (target.matches("[data-edit-account]")) openAccountEditor(target.dataset.editAccount);
      if (target.matches("[data-toggle-account]")) {
        const account = accounts.find((item) => item.id === target.dataset.toggleAccount);
        if (account) {
          account.status = account.status === "启用" ? "停用" : "启用";
          if (account.id === currentAccountId && account.status === "停用") currentAccountId = "manager";
          renderAccountChrome();
          renderAccounts();
          showToast(`${account.name} 已${account.status}`);
        }
      }
      if (target.matches("[data-submit-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.submitBroadcast); if (task) renderBroadcastRiskModal(evaluateBroadcastRisk(task)); }
      if (target.matches("[data-open-approval]")) { const id = target.dataset.openApproval; openBroadcastAction("处理审批", `<div class="workflow-summary"><strong>审批三操作</strong><span>通过后将按执行模式进入待定时发送或待员工确认队列；驳回与终止必须填写原因。</span></div><div class="form-row"><label>审批意见</label><textarea class="textarea" id="broadcastActionNote" placeholder="通过可选填；驳回或终止必须填写原因"></textarea></div><div class="actions"><button class="btn primary" data-approval-choice="approve">通过</button><button class="btn" data-approval-choice="reject">驳回修改</button><button class="btn danger" data-approval-choice="terminate">终止</button></div>`, "", id, "确认"); }
      if (target.matches("[data-approval-choice]")) { $("#broadcastActionConfirm").dataset.broadcastRiskConfirm = target.dataset.approvalChoice; $("#broadcastActionConfirm").textContent = target.textContent; }
      if (target.matches("[data-remind-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.remindBroadcast); if (task) { task.operationLog.unshift({ action: "发送前提醒", from: task.status, to: task.status, note: "已向执行员工发送 30 分钟前提醒", operator: currentAccount().name, time: broadcastNow() }); renderBroadcastDetail(broadcastIndex(task.id)); } }
      if (target.matches("[data-edit-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.editBroadcast); if (task) openBroadcastAction("编辑发送时间", `<div class="workflow-summary"><strong>${task.title}</strong><span>发送前可以修改时间，修改会保留在操作记录中。</span></div><div class="form-row"><label>发送时间</label><input class="field" id="broadcastActionTime" value="${task.time}"></div>`, "edit", task.id, "保存时间"); }
      if (target.matches("[data-terminate-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.terminateBroadcast); if (task) openBroadcastAction("终止任务", `<div class="form-row"><label>终止原因</label><textarea class="textarea" id="broadcastActionNote" placeholder="必须填写终止原因"></textarea></div>`, "terminate", task.id, "确认终止"); }
      if (target.matches("[data-pause-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.pauseBroadcast); if (task) { task.execution.paused = !task.execution.paused; task.operationLog.unshift({ action: task.execution.paused ? "暂停发送" : "继续发送", from: task.status, to: task.status, note: "执行控制已回写", operator: currentAccount().name, time: broadcastNow() }); if (!task.execution.paused) setTimeout(() => completeBroadcastTask(task), 500); renderBroadcastDetail(broadcastIndex(task.id)); } }
      if (target.matches("[data-run-broadcast]")) runBroadcast(Number(target.dataset.runBroadcast));
      if (target.matches("[data-retry-broadcast]")) { const task = broadcasts[Number(target.dataset.retryBroadcast)]; if (task) openBroadcastAction("创建失败补发", `<div class="workflow-summary"><strong>${task.title}</strong><span>将为 ${task.fail} 个失败对象创建独立草稿，原任务数据不会被覆盖。</span></div>`, "retry", task.id, "创建补发草稿"); }
      if (target.matches("[data-review-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.reviewBroadcast); if (task) openBroadcastAction("任务复盘", `<div class="workflow-summary"><strong>${task.title}</strong><span>成功率 ${task.target ? ((task.success / task.target) * 100).toFixed(1) : 0}% · ${task.review?.clickRate} · ${task.review?.conversion} · ${task.review?.churn}</span></div>`, "blocked", task.id, "关闭"); }
      if (target.matches("[data-copy-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.copyBroadcast); if (task) { const copy = normalizeBroadcast({ ...task, id: `broadcast-${Date.now()}`, title: `${task.title}（副本）`, status: "草稿", success: 0, fail: 0, review: null, approvalHistory: [] }, broadcasts.length + 1); broadcasts.unshift(copy); selectedBroadcastIndex = 0; renderBroadcasts(); } }
      if (target.matches("[data-export-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.exportBroadcast); if (task) { downloadTextFile(`${task.title}-发送明细.csv`, ["对象,结果,失败原因", ...task.recipients.map((item, i) => `${item.name},${i < task.fail ? "失败" : "成功"},${i < task.fail ? "客户拒收或会话不可达" : ""}`)].join("\n")); task.operationLog.unshift({ action: "导出发送明细", from: task.status, to: task.status, note: "CSV 已下载", operator: currentAccount().name, time: broadcastNow() }); renderBroadcastDetail(broadcastIndex(task.id)); } }
      if (target.matches("[data-archive-broadcast]")) { const task = broadcasts.find((item) => item.id === target.dataset.archiveBroadcast); if (task) openBroadcastAction("归档任务", `<div class="workflow-summary"><strong>${task.title}</strong><span>归档后将在活动列表中隐藏，但保留任务与操作记录。</span></div>`, "archive", task.id, "确认归档"); }
      if (target.matches("[data-remove-recipient]")) { target.closest(".workflow-list-item")?.remove(); const count = Number(("" + $("#broadcastTargetCount")?.textContent).replace(/\D/g, "")) || 0; if ($("#broadcastTargetCount")) $("#broadcastTargetCount").textContent = `${Math.max(0, count - 1).toLocaleString()} ${broadcastTargetType === "客户群" ? "个客户群" : "位客户"}`; }
      if (target.matches("[data-detail-broadcast]")) {
        openBroadcastDetail(Number(target.dataset.detailBroadcast));
        showToast("已打开群发任务详情");
      }
      if (target.matches("#toggleBroadcastTags")) {
        const menu = $("#broadcastTagMenu");
        if (menu) menu.hidden = !menu.hidden;
      }
      if (target.matches("[data-broadcast-tag]")) {
        const input = $("#broadcastTagInput");
        if (input) {
          const tags = input.value.split("、").filter(Boolean);
          const tag = target.dataset.broadcastTag;
          const next = target.checked ? [...new Set([...tags, tag])] : tags.filter((item) => item !== tag);
          input.value = next.join("、");
          renderBroadcastWizard();
        }
      }
      if (target.matches("[data-remove-broadcast-tag]")) {
        const input = $("#broadcastTagInput");
        if (input) {
          input.value = input.value.split("、").filter((item) => item && item !== target.dataset.removeBroadcastTag).join("、");
          renderBroadcastWizard();
        }
      }
      if (target.matches("[data-target-type]")) {
        broadcastTargetType = target.dataset.targetType;
        broadcastFilterMode = "smart";
        checkedCustomerIndexes = new Set();
        checkedGroupIds = new Set();
        $$("[data-target-type]").forEach((item) => item.classList.toggle("active", item === target));
        $("#broadcastTargetCount").textContent = broadcastTargetType === "潜客" ? "1,250 位客户" : "42 个客户群";
        showToast("已切换目标类型，请重新设置筛选条件");
        renderBroadcastWizard();
      }
      if (target.matches("[data-broadcast-filter-mode]")) {
        broadcastFilterMode = target.dataset.broadcastFilterMode;
        if (broadcastFilterMode === "manual" && broadcastTargetType === "客户群" && !checkedGroupIds.size) groups.slice(0, 2).forEach((group) => checkedGroupIds.add(group.id));
        $$('[data-broadcast-filter-mode]').forEach((item) => item.classList.toggle("active", item === target));
        renderBroadcastWizard();
        showToast(broadcastFilterMode === "manual" ? "已切换为手动勾选，当前勾选对象会直接写入任务" : "已切换为标签批量筛选，人数由筛选条件计算");
      }
      if (target.matches("[data-send-type]")) {
        broadcastSendType = target.dataset.sendType;
        $$("[data-send-type]").forEach((item) => item.classList.toggle("active", item === target));
        renderBroadcastWizard();
      }
      if (target.matches("[data-time-preset]")) {
        broadcastSendType = "定时单次";
        setBroadcastTime(target.dataset.timePreset);
        showToast(`已选择发送时间：${formatBroadcastTime(target.dataset.timePreset)}`);
      }
      if (target.matches("[data-send-now]")) {
        broadcastSendType = "立即发送";
        $$("[data-send-type]").forEach((item) => item.classList.toggle("active", item.dataset.sendType === broadcastSendType));
        renderBroadcastWizard();
      }
      if (target.matches("[data-insert-broadcast-variable]")) {
        const input = $("#broadcastContentInput");
        if (!input) return;
        const variable = target.dataset.insertBroadcastVariable;
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? input.value.length;
        input.value = `${input.value.slice(0, start)}${variable}${input.value.slice(end)}`;
        input.focus();
        input.setSelectionRange(start + variable.length, start + variable.length);
        renderBroadcastWizard();
      }
      if (target.matches("[data-broadcast-template]")) {
        const templates = { repurchase: ["七夕皮肤管理复购提醒", "张女士您好，近期肌肤屏障修护季已开启，可根据上次皮肤检测结果安排一次补水修护方案。"], consult: ["项目咨询答疑提醒", "为帮助您更好了解项目安排，已整理恢复期与常见问题说明。如需个性化建议，可直接回复咨询。"], event: ["本周到店福利通知", "本周福利已更新，回复「预约」即可为您保留到店权益与顾问咨询时段。"] };
        const [title, content] = templates[target.dataset.broadcastTemplate];
        $("#broadcastTitleInput").value = title; $("#broadcastContentInput").value = content;
        $$("[data-broadcast-template]").forEach((item) => item.classList.toggle("active", item === target));
        renderBroadcastWizard();
      }
      if (target.matches("[data-operator-choice]")) {
        const name = target.dataset.operatorChoice;
        if (broadcastOperators.has(name)) broadcastOperators.delete(name);
        else broadcastOperators.add(name);
        target.classList.toggle("active", broadcastOperators.has(name));
        renderBroadcastWizard();
      }
      if (target.matches("[data-finish-todo]")) {
        handleTodoAction(Number(target.dataset.finishTodo));
      }
      if (target.matches("tr[data-broadcast-row]") && !event.target.closest("input, button, select, textarea, a")) {
        openBroadcastDetail(Number(target.dataset.broadcastRow));
        showToast("已打开群发任务详情");
      }
      if (target.matches("[data-group-detail]")) {
        openGroupDetail(target.dataset.groupDetail);
      }
      if (target.matches("tr[data-group-row]") && !event.target.closest("input, button, select, textarea, a")) {
        openGroupDetail(target.dataset.groupRow);
      }
      if (target.matches("tr[data-form-row]") && !event.target.closest("input, button, select, textarea, a")) {
        renderCustomFormData(Number(target.dataset.formRow));
        showToast("已打开表单提交数据");
      }
      if (target.matches("tr[data-customer]") && !event.target.closest("input, button, select, textarea, a")) {
        openCustomerDetail(Number(target.dataset.customer));
      }
    });

    $("#confirmTags").addEventListener("click", () => {
      if (!tagSelection.size) {
        showToast("请先选择至少 1 个标签");
        return;
      }
      if (tagMode === "group") {
        const group = groups.find((item) => item.id === selectedGroupId);
        if (!group) {
          showToast("未找到当前群组，请重新打开详情");
          return;
        }
        const tags = Array.from(tagSelection);
        tags.forEach((tag) => ensureManagedTag(tag, "群标签", "群运营"));
        group.tags = tags;
        group.tag = tags[0] || "未分组";
        closeModal("#tagModal");
        renderTagManagement();
        openGroupDetail(group.id);
        recordOperation("编辑群标签", group.name, tags.join("、"));
        showToast(`已更新「${group.name}」的 ${tags.length} 个群标签`);
        return;
      }
      const targetIndexes = tagTargetIndexes();
      if (!targetIndexes.length) {
        showToast("当前目标范围没有匹配潜客，请重新选择打标对象");
        return;
      }
      targetIndexes.forEach((index) => {
        const customer = customers[index];
        if (!customer) return;
        tagSelection.forEach((tag) => {
          ensureManagedTag(tag);
          if (!customer.tags.includes(tag)) customer.tags.push(tag);
        });
      });
      closeModals();
      renderTagManagement();
      renderCustomers(selectedCustomerIndex);
      showToast(`已为「${tagScopeLabel()}」${targetIndexes.length} 位潜客添加 ${tagSelection.size} 个标签`);
    });

    $("#addTagFromSearch").addEventListener("click", () => {
      const value = $("#tagSearchInput").value.trim();
      if (!value) {
        showToast("请输入标签名称");
        return;
      }
      ensureManagedTag(value, tagMode === "group" ? "群标签" : "客户标签", tagMode === "group" ? "群运营" : "需求阶段");
      tagSelection.add(value);
      renderTagSelection();
      showToast(`已加入标签：${value}`);
    });

    $("#saveManagedTag").addEventListener("click", saveManagedTag);
    $("#saveTagGroup").addEventListener("click", saveTagGroup);
    $("#tagTypeInput").addEventListener("change", (event) => renderTagEditorGroupOptions(event.target.value));

    $("#submitWizard").addEventListener("click", () => {
      if (broadcastStep < 3) {
        if (broadcastStep === 1) {
          const manualCount = broadcastTargetType === "客户群" ? checkedGroupIds.size : checkedCustomerIndexes.size;
          if (broadcastFilterMode === "manual" && !manualCount) return showToast("请至少勾选 1 个发送对象");
        }
        broadcastStep += 1;
        renderBroadcastWizard();
        return;
      }
      createBroadcastTask("modal");
    });

    $("#saveBroadcastDraft").addEventListener("click", () => createBroadcastTask("save"));
    $("#broadcastActionConfirm").addEventListener("click", () => handleBroadcastAction($("#broadcastActionConfirm").dataset.broadcastRiskConfirm || "blocked"));
    $("#broadcastContentInput").addEventListener("input", renderBroadcastWizard);
    $("#closeBroadcastTags").addEventListener("click", () => { $("#broadcastTagMenu").hidden = true; });
    $("#broadcastRiskExclude").addEventListener("change", (event) => {
      if (!event.target.checked) openBroadcastAction("确认保留 P0 风险对象", `<div class="broadcast-alert risk">取消过滤会把术后逾期或 P0 客诉对象保留在名单中。请确认后继续；提交审批时仍需再次确认。</div>`, "blocked", "", "我已知悉");
      renderBroadcastWizard();
    });
    document.addEventListener("click", (event) => {
      const execution = event.target.closest("[data-execution-mode]");
      if (execution) { broadcastExecutionMode = execution.dataset.executionMode; renderBroadcastWizard(); }
      const manual = event.target.closest("#manualBroadcastRecipients");
      if (manual) {
        const isGroup = broadcastTargetType === "客户群";
        const list = isGroup ? groups.slice(0, 8).map((item) => ({ id: item.id, name: item.name, meta: `群主 ${item.owner} · ${item.members} 人`, risk: item.members < 30 ? "低活跃" : "可触达" })) : customers.slice(0, 10).map((item, index) => ({ id: String(index), name: item.name, meta: `${item.tags.join(" · ")} · 上次触达 ${item.time}`, risk: index === 1 ? "P0 风险" : "可触达" }));
        const chosen = isGroup ? checkedGroupIds : new Set(Array.from(checkedCustomerIndexes).map(String));
        openBroadcastAction("手动调整名单", `<div class="workflow-summary"><strong>完整匹配名单 · ${list.length} 个对象</strong><span>左侧勾选决定是否发送；右侧清晰展示风险标签、归属信息和上次触达。</span></div><div class="workflow-list">${list.map((item) => `<label class="workflow-list-item"><input type="checkbox" data-manual-recipient="${item.id}" ${chosen.has(item.id) ? "checked" : ""}><div><strong>${item.name}</strong><span>${item.meta}</span></div><span class="chip ${item.risk === "可触达" ? "green" : "rose"}">${item.risk}</span></label>`).join("")}</div>`, "manualRecipients", "", "确认名单");
      }
    });
    document.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove-recipient]");
      if (!remove) return;
      remove.closest(".workflow-list-item")?.remove();
      const count = Number(("" + $("#broadcastTargetCount")?.textContent).replace(/\D/g, "")) || 0;
      if ($("#broadcastTargetCount")) $("#broadcastTargetCount").textContent = `${Math.max(0, count - 1).toLocaleString()} ${broadcastTargetType === "客户群" ? "个客户群" : "位客户"}`;
    });

    $("#broadcastPrev").addEventListener("click", () => {
      if (broadcastStep > 1) {
        broadcastStep -= 1;
        renderBroadcastWizard();
      }
    });

    $("#wizardNext").addEventListener("click", () => createBroadcastTask("submit"));
    document.addEventListener("click", (event) => {
      const detailTab = event.target.closest("[data-conversation-detail-tab]");
      if (detailTab) {
        setConversationDetailTab(detailTab.dataset.conversationDetailTab);
        return;
      }
      const dispositionChoiceButton = event.target.closest("[data-disposition-choice]");
      if (dispositionChoiceButton) {
        const thread = currentThread();
        thread.dispositionChoice = dispositionChoiceButton.dataset.dispositionChoice;
        $$('[data-disposition-choice]').forEach((button) => button.classList.toggle("active", button === dispositionChoiceButton));
        showToast(thread.dispositionChoice === "ignored" ? "已选择误报 / 忽略" : "已选择标记已处理");
        return;
      }
      if (event.target.closest("#disposeRisk")) {
        const thread = currentThread();
        const choice = thread.dispositionChoice || "processed";
        const note = $("#riskNote")?.value.trim() || "未填写备注";
        const choiceLabel = choice === "ignored" ? "误报 / 忽略" : "标记已处理";
        thread.dispositionHistory = thread.dispositionHistory || [];
        thread.dispositionHistory.unshift({ choice: choiceLabel, note, time: nowLabel(), operator: currentAccount().name });
        thread.lastDispositionNote = note;
        thread.status = choice === "ignored" ? "已忽略" : "已处理";
        thread.summary = choice === "ignored" ? "风险已忽略，已保留处置记录" : "风险已处置，等待门店回访确认";
        if (choice !== "ignored") completeTodoByRoute("thread-c1", "已提交风险处置并进入已处理会话");
        recordOperation(choice === "ignored" ? "忽略风险" : "处置风险", thread.title, note);
        renderConversationThread();
        setConversationDetailTab("disposition", false);
        showToast(choice === "ignored" ? "已标记为误报并保存跟进记录" : "风险会话已处置，并写入跟进记录");
      }
    });

    document.addEventListener("click", (event) => {
      const advance = event.target.closest("[data-advance-service-stage]");
      if (advance) {
        const customer = customers[Number(advance.dataset.advanceServiceStage)];
        if (!customer) return;
        customer.serviceStage = Math.min(4, (customer.serviceStage || 0) + 1);
        customer.status = customer.serviceStage >= 4 ? "待回访" : customer.serviceStage >= 2 ? "已预约" : "咨询中";
        customer.followups = customer.followups || [];
        customer.followups.unshift({ type: "服务节点已推进", time: "2026-07-15 16:10", note: `已更新为「${["待预约", "预约已确认", "已治疗", "术后关怀", "复查已安排"][customer.serviceStage]}」，可继续安排下一次服务。` });
        renderCustomerDetail(selectedCustomerIndex);
        renderCustomers(selectedCustomerIndex);
        recordOperation("推进客户服务节点", customer.name, `当前：${customer.serviceStage}`);
        showToast(`已将 ${customer.name} 推进至下一服务节点`);
        return;
      }
      const review = event.target.closest("[data-review-content]");
      if (review) {
        const isAsset = review.dataset.reviewKind === "素材";
        const collection = isAsset ? assets : scripts;
        const item = collection.find((entry) => String(isAsset ? entry.title : entry.id) === review.dataset.reviewKey);
        if (!item) return;
        item.compliance = review.dataset.reviewContent === "approve" ? "已通过" : "需更新";
        if (review.dataset.reviewContent === "approve") item.status = "可用";
        recordOperation(review.dataset.reviewContent === "approve" ? "内容合规审核通过" : "内容合规退回", item.title, `${review.dataset.reviewKind}：${item.compliance}`);
        renderAssets();
        renderSupplementModules();
        showToast(review.dataset.reviewContent === "approve" ? `「${item.title}」已审核通过` : `「${item.title}」已退回修改`);
        return;
      }
      const attribution = event.target.closest("[data-attribution-action]");
      if (attribution) {
        const action = attribution.dataset.attributionAction;
        if (action.includes("复购")) openMedicalSop("hydration");
        else if (action.includes("风险")) runAssistantAction("risk");
        else if (action.includes("跟进")) runAssistantAction("reply");
        else showToast(`${action}已加入门店运营计划`);
      }
    });
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-conversation-ai]");
      if (button) handleConversationAiAction(button.dataset.conversationAi);
    });
    $("#sendReply").addEventListener("click", sendThreadReply);
    $("#submitBatchAdd").addEventListener("click", () => {
      const phones = $("#phoneList").value.split(/\s+/).filter(Boolean);
      const valid = phones.filter((phone) => /^1\d{10}$/.test(phone));
      const invalid = phones.length - valid.length;
      if (!valid.length) {
        showToast("没有可提交的有效手机号");
        $("#phoneList").focus();
        return;
      }
      const task = { time: nowLabel(), total: phones.length, valid: valid.length, success: 0, fail: invalid, status: "执行中", owner: $("#batchAssignMode").value.replace("自动分配：", "").replace("指定员工：", "") };
      batchTasks.unshift(task);
      renderBatchTasks();
      $("#phonePreview").textContent = `任务已提交：${valid.length} 个有效号码，${invalid} 个无效号码已过滤`;
      recordOperation("批量加好友", `${valid.length} 个号码`, `执行员工：${task.owner}`);
      showToast(`加好友任务已提交：${valid.length} 个号码进入队列`);
      setTimeout(() => {
        task.success = Math.max(0, task.valid - Math.min(1, task.valid));
        task.fail += task.valid - task.success;
        task.status = "已完成";
        renderBatchTasks();
        recordOperation("完成加好友", `${task.total} 个号码`, `成功 ${task.success} · 失败 ${task.fail}`);
      }, 900);
    });
    $("#syncGroups").addEventListener("click", () => {
      groups.slice(0, 5).forEach((group, index) => group.active = index ? `07-10 15:${String(12 + index).padStart(2, "0")}` : "07-10 15:18");
      renderGroups();
      recordOperation("同步客户群", "企微客户群", "Demo 同步：已更新 5 个群的最新活跃时间");
      showToast("外部群同步完成：已更新 5 个群");
    });
    $("#syncConversations").addEventListener("click", () => {
      if (!conversationThreads.some((thread) => thread.id === "c4")) {
        conversationThreads.unshift({
          id: "c4",
          type: "单客",
          title: "何女士",
          meta: "单客会话 · 珀妍抗衰中心 · 归属员工 钱主管",
          tags: ["术后回访", "待回访"],
          status: "风险",
          owner: "钱主管",
          summary: "术后恢复咨询，等待客服回复",
          side: { source: "术后回访", project: "面部年轻化", risk: "中", note: "建议 15 分钟内联系顾问" },
          messages: [{ from: "何女士", role: "customer", time: "07-10 15:16", text: "今天有点肿，正常吗？" }]
        });
        activeThreadId = "c4";
      }
      renderConversationThread();
      recordOperation("同步会话", "企微会话存档", "Demo 同步：新增 1 条风险会话");
      showToast("会话同步完成：新增 1 条风险会话");
    });
    $("#createMigration").addEventListener("click", () => openModal("#migrationModal"));
    $("#submitInvite").addEventListener("click", () => {
      const confirmButton = $("#confirmInvite");
      const panel = confirmButton?.closest(".panel");
      panel?.classList.add("workflow-focus");
      panel?.scrollIntoView({ behavior: "smooth", block: "center" });
      panel?.querySelector("select, input, textarea")?.focus();
      setTimeout(() => panel?.classList.remove("workflow-focus"), 1800);
      showToast("已定位任务配置，请确认后提交");
    });
    $("#confirmInvite").addEventListener("click", () => {
      const targetGroup = document.querySelector('#screen-marketing [data-subscreen="group-invite"] select.field')?.value?.split("（")[0] || "悦颜静安-焕肤福利群";
      inviteTasks.unshift({ title: "高意向潜客入群", group: targetGroup, target: 50, success: 0, fail: 0, status: "待执行", time: "07-10" });
      renderInviteTasks();
      recordOperation("创建拉群任务", targetGroup, "高意向潜客 50 人 · 待执行");
      showToast("拉群任务已提交，并写入任务列表");
    });
    $("#saveRoles").addEventListener("click", () => {
      accounts.forEach((account) => {
        account.permissions = [...(rolePermissionDefaults[account.role] || rolePermissionDefaults["运营专员"])];
        account.menus = account.permissions.length;
      });
      renderAccountChrome();
      renderAccounts();
      showToast("已按角色矩阵刷新全部员工默认权限");
    });
    $("#confirmUpload").addEventListener("click", () => {
      const asset = createUploadedAsset();
      assetTypeFilter = asset.type;
      assetDirFilter = asset.dir;
      if (uploadContext === "broadcast") {
        selectedBroadcastAssets.add(asset.title);
        renderBroadcastWizard();
      }
      closeModals();
      if (uploadContext === "broadcast") openModal("#wizardModal");
      renderAssets();
      showToast(uploadContext === "broadcast"
        ? `素材「${asset.title}」已上传，并选入当前群发`
        : `素材上传成功，已归入${asset.dir}目录`);
    });
    document.addEventListener("click", (event) => {
      const toggle = event.target.closest("#toggleUploadTagPicker");
      if (toggle) {
        const picker = $("#uploadTagPicker");
        picker.hidden = !picker.hidden;
        if (!picker.hidden) {
          renderUploadTags();
          $("#uploadTagSearch").focus();
        }
        return;
      }
      const option = event.target.closest("[data-upload-tag-option]");
      if (option) {
        const tag = option.dataset.uploadTagOption;
        if (uploadTagSelection.has(tag)) uploadTagSelection.delete(tag);
        else uploadTagSelection.add(tag);
        renderUploadTags();
        return;
      }
      const remove = event.target.closest("[data-upload-tag-remove]");
      if (remove) {
        uploadTagSelection.delete(remove.dataset.uploadTagRemove);
        renderUploadTags();
      }
    });
    $("#uploadTagSearch").addEventListener("input", renderUploadTags);
    $("#uploadTagSearch").addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      addUploadTagFromInput();
    });
    $("#createUploadTag").addEventListener("click", addUploadTagFromInput);
    $("#uploadDropZone").addEventListener("click", () => $("#uploadFileInput").click());
    $("#uploadFileInput").addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      selectedUploadFile = file;
      const type = inferUploadType(file);
      $("#uploadTypeInput").value = type;
      if (!$("#uploadTitleInput").value.trim() || $("#uploadTitleInput").value === "新上传群发素材") {
        $("#uploadTitleInput").value = file.name.replace(/\.[^.]+$/, "");
      }
      $("#uploadFileStatus").textContent = `已选择：${file.name} · ${type}`;
    });
    $("#confirmFollow").addEventListener("click", () => {
      const item = customers[selectedCustomerIndex];
      if (!item) return;
      const type = $("#followTypeInput").value;
      const time = $("#followTimeInput").value.trim() || "2026-07-10 16:30";
      const note = $("#followNoteInput").value.trim() || "补充跟进客户需求";
      item.followups = item.followups || [];
      item.followups.unshift({ type, time, note });
      item.status = "待回访";
      item.time = time.slice(5, 10).replace("-", "-");
      if (item.tags.some((tag) => tag.includes("高意向") || tag.includes("抗衰"))) {
        completeTodoByRoute("intent-customers", `已为 ${item.name} 创建 ${type} 跟进`);
      }
      recordOperation("添加跟进", item.name, `${type} · ${time}`);
      closeModals();
      renderCustomers(selectedCustomerIndex);
      if (conversationThreads.some((thread) => thread.title === item.name)) renderConversationThread();
      showToast(`已为 ${item.name} 添加跟进：${type}`);
    });
    $("#confirmMigration").addEventListener("click", () => {
      const count = Math.max(1, Number($("#migrationCountInput").value) || 1);
      migrationTasks.unshift({
        from: $("#migrationFromInput").value,
        to: $("#migrationToInput").value,
        scope: `${$("#migrationScopeInput").value} ${count} 位客户`,
        status: "待迁移",
        progress: 0,
        count
      });
      closeModals();
      renderMigrationBoard();
      showToast("迁移任务已创建，并写入待迁移看板");
    });
    $("#usePreviewAsset").addEventListener("click", () => {
      if (!selectedPreviewAsset) return;
      selectedPreviewAsset.uses += 1;
      selectedBroadcastAssets.add(selectedPreviewAsset.title);
      $("#broadcastContentInput").value = `${$("#broadcastContentInput").value}\n\n已选素材：${selectedPreviewAsset.title}`;
      closeModals();
      activateScreen("marketing");
      renderAssets();
      renderBroadcastWizard();
      showToast(`${selectedPreviewAsset.title} 已选入群发草稿`);
    });
    $("#addBlacklistFromSelected").addEventListener("click", openBlacklistModal);
    $("#blacklistCustomerSelect").addEventListener("change", updateBlacklistPreview);
    $("#blacklistReasonInput").addEventListener("change", updateBlacklistPreview);
    $("#confirmBlacklistAdd").addEventListener("click", addBlacklistCustomer);
    $("#createLossTodo").addEventListener("click", () => {
      todos.unshift({ title: "流失预警跟进 - 陈女士", desc: "连续 3 条消息未回复，建议安排电话关怀", tag: "高", type: "去处理", route: "intent-customers" });
      renderTodos();
      showToast("已生成流失预警待办");
    });
    $("#trendPeriod").addEventListener("change", drawTrendChart);
    $("#createChannelCode").addEventListener("click", () => {
      openWorkflow({
        title: "新建渠道活码配置",
        confirmLabel: "保存配置",
        body: `
          <div class="form-grid two">
            <div class="form-row"><label for="channelCodeName">渠道名称</label><input class="field" id="channelCodeName" value="小红书618引流"></div>
            <div class="form-row"><label for="channelCodeAssign">分配规则</label><select class="field" id="channelCodeAssign"><option>空闲优先</option><option>轮流分配</option><option>固定员工</option></select></div>
          </div>
          <div class="form-row"><label for="channelCodeTag">自动标签</label><input class="field" id="channelCodeTag" value="渠道_小红书"></div>
          <div class="workflow-external"><strong>二维码图片需要企微活码服务</strong><span>当前会保存渠道名称、分配规则和自动标签；接入后再生成可投放二维码。</span></div>
        `,
        onConfirm: () => {
          const name = $("#channelCodeName")?.value.trim();
          if (!name) { showToast("请输入渠道名称"); return false; }
          if (channelCodes.some((item) => item.name === name)) { showToast("已有同名渠道配置"); return false; }
          channelCodes.unshift({ name, today: 0, total: 0, assign: $("#channelCodeAssign").value, tag: $("#channelCodeTag").value.trim(), status: "待接入" });
          renderSupplementModules();
          recordOperation("创建渠道活码配置", name, "本地规则已保存；二维码待企微活码服务");
          showToast("渠道配置已保存，可在列表复查；二维码待接口生成");
        }
      });
    });
    $("#createTagGroupTask").addEventListener("click", openTagGroupTaskModal);
    ["#tagGroupTaskName", "#tagGroupRuleInput", "#tagGroupTargetInput", "#tagGroupSizeInput"].forEach((selector) => {
      $(selector).addEventListener("input", updateTagGroupTaskPreview);
      $(selector).addEventListener("change", updateTagGroupTaskPreview);
    });
    $("#confirmTagGroupTask").addEventListener("click", createTagGroupTask);
    $("#saveGroupWelcome").addEventListener("click", () => {
      const value = $("#groupWelcomeText").value.trim();
      if (!value) { showToast("请输入入群欢迎语"); return; }
      $("#tagGroupWelcomeInput").value = value;
      $("#defaultGroupWelcomeInput").value = value;
      savedWelcomeConfig.group = value;
      markSaved("#groupWelcomeSaved", "已同步");
      recordOperation("保存欢迎语", "标签建群", "已同步到建群规则和系统默认模板");
      showToast("入群欢迎语已保存并同步");
    });
    $("#groupWelcomeText").addEventListener("input", () => markDirty("#groupWelcomeSaved"));
    $("#createMoment").addEventListener("click", () => {
      moments.unshift({ title: "七夕水光复购朋友圈", staff: "李运营等3人", time: "定时 07-15 10:00", views: 0, tags: 0, status: "定时" });
      renderSupplementModules();
      showToast("朋友圈已创建，查看追踪和自动打标签已开启");
    });
    $("#createScriptPackage").addEventListener("click", () => $("#createScript").click());
    $("#createScript").addEventListener("click", () => {
      openWorkflow({
        title: "新建话术包",
        confirmLabel: "保存草稿",
        body: `
          <div class="form-grid two">
            <div class="form-row"><label for="scriptCreateTitle">话术包名称</label><input class="field" id="scriptCreateTitle" value="新建水光复购话术包"></div>
            <div class="form-row"><label>归属范围</label><div class="material"><strong>个人话术</strong><span class="table-meta">由当前账号创建，可随时编辑后提交审核。</span></div></div>
            <div class="form-row"><label for="scriptCreateCollection">所属集合</label><select class="field" id="scriptCreateCollection"><option>水光复购</option><option>术后关怀</option><option>新客咨询</option><option>客诉安抚</option></select></div>
            <div class="form-row"><label for="scriptCreateProject">所属项目</label><select class="field" id="scriptCreateProject"><option>水光项目</option><option>光电抗衰</option><option>全项目</option></select></div>
          </div>
          <div class="form-row"><label for="scriptCreateContent">首条话术</label><textarea class="field" id="scriptCreateContent" rows="4">您好，本周水光复购权益已更新，我可以先为您保留检测与咨询名额。</textarea></div>
          <div class="workflow-summary"><strong>保存后状态</strong><span>话术包进入“待审核”，可在列表中继续编辑、批量打标签或提交发布。</span></div>
        `,
        onConfirm: () => {
          const title = $("#scriptCreateTitle")?.value.trim();
          const content = $("#scriptCreateContent")?.value.trim();
          if (!title || !content) { showToast("请填写话术包名称和首条话术"); return false; }
          if (scripts.some((item) => item.title === title)) { showToast("已有同名话术包"); return false; }
          const scope = "个人话术";
          scripts.unshift({
            id: `sp-${Date.now()}`,
            title,
            group: "客户复购",
            collection: $("#scriptCreateCollection").value,
            scope,
            ownerType: scope.replace("话术", ""),
            scene: "术后关怀",
            stage: "老客复购",
            channels: ["单聊"],
            projects: [$("#scriptCreateProject").value],
            status: "待审核",
            scriptCount: 1,
            nodes: 1,
            uses: 0,
            conversion: 0,
            updated: "刚刚",
            creator: currentAccount().name,
            favorite: false,
            content
          });
          selectedScriptIds.clear();
          scriptResourceFilter = "全部话术";
          scriptCollectionFilter = "全部";
          scriptDetailId = scripts[0].id;
          renderSupplementModules();
          recordOperation("创建话术包", title, "已保存为待审核草稿");
          showToast("话术包已保存为待审核草稿，可在列表中继续管理");
        }
      });
    });
    $("#insertScriptToReply").addEventListener("click", () => {
      goSubscreen("customers", "conversations");
      $("#replyInput").value = $("#scriptDraft").value;
      showToast("话术已插入当前会话回复框");
    });
    $("#saveSmartCard").addEventListener("click", () => {
      const name = $("#cardNameInput").value.trim() || "李运营";
      const products = $("#cardProductsInput").value.split(",").map((item) => item.trim()).filter(Boolean);
      $("#cardPreviewAvatar").textContent = name.slice(0, 1);
      $("#cardPreviewName").textContent = name;
      $("#cardPreviewTitle").textContent = `${$("#cardTitleInput").value.trim() || "高级客户顾问"} · 微枢医美机构`;
      $("#cardProductTags").innerHTML = products.map((item) => `<span class="chip ${chipClass(item)}">${item}</span>`).join("");
      showToast("智能名片已保存，可用于侧边栏分享");
    });
    $("#cardAddWechat").addEventListener("click", () => {
      openExternalDependency({
        title: "添加员工企微",
        description: "真实加好友需要企业微信客户联系能力、员工授权与可用二维码。",
        localResult: "已生成员工企微标识 li.ops，可复制用于外部接口联调。",
        copyValue: "li.ops"
      });
    });
    $("#cardViewProducts").addEventListener("click", () => {
      $("#cardProductsInput").focus();
      showToast("已定位到产品配置，可编辑后保存名片");
    });
    $("#createPromo").addEventListener("click", () => {
      const name = $("#promoNameInput").value.trim() || "新推广码";
      const existing = promos.find((item) => item.name === name);
      if (!existing) promos.unshift({ name, scans: 0, converts: 0, desc: $("#promoDescInput").value.trim(), tag: `渠道_${name.slice(0, 4)}` });
      renderSupplementModules();
      recordOperation("创建推广码", name, "配置已保存；二维码图片待接入活码服务");
      showToast(existing ? "推广码配置已更新" : "推广码配置已创建");
    });
    $("#previewPromo").addEventListener("click", () => {
      const name = $("#promoNameInput").value.trim() || "未命名推广页";
      const desc = $("#promoDescInput").value.trim() || "暂无推广描述";
      openWorkflow({
        title: "推广页预览",
        confirmLabel: "保存配置",
        body: `
          <div class="workflow-summary"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(desc)}</span></div>
          <div class="workflow-list"><div class="workflow-list-item"><strong>自动标签</strong><span>渠道_${escapeHtml(name.slice(0, 4))}</span></div><div class="workflow-list-item"><strong>追踪指标</strong><span>扫码、转化、加好友</span></div></div>
          <div class="workflow-external"><strong>二维码图片需要活码服务</strong><span>当前 Demo 会保存落地页配置并生成可下载的联调清单。</span></div>
        `,
        onConfirm: () => $("#createPromo").click()
      });
    });
    $("#createCustomForm").addEventListener("click", openCustomFormModal);
    ["#customFormNameInput", "#customFormSceneInput", "#customFormTagInput"].forEach((selector) => {
      $(selector).addEventListener("input", updateCustomFormPreview);
      $(selector).addEventListener("change", updateCustomFormPreview);
    });
    $$("[data-form-field]").forEach((button) => {
      button.addEventListener("click", () => {
        const field = button.dataset.formField;
        if (customFormFieldSelection.has(field)) customFormFieldSelection.delete(field);
        else customFormFieldSelection.add(field);
        button.classList.toggle("active", customFormFieldSelection.has(field));
        updateCustomFormPreview();
      });
    });
    $("#confirmCustomForm").addEventListener("click", createCustomForm);
    $("#createRadar").addEventListener("click", () => {
      openWorkflow({
        title: "新建互动雷达",
        confirmLabel: "保存雷达配置",
        body: `
          <div class="form-grid two">
            <div class="form-row"><label for="radarCreateName">雷达名称</label><input class="field" id="radarCreateName" value="超声炮项目介绍"></div>
            <div class="form-row"><label for="radarCreateType">内容类型</label><select class="field" id="radarCreateType"><option>链接</option><option>文件</option></select></div>
          </div>
          <div class="form-row"><label for="radarCreateTag">打开后自动标签</label><input class="field" id="radarCreateTag" value="意向_超声炮"></div>
          <div class="workflow-external"><strong>打开事件需要企微侧边栏或落地页 SDK</strong><span>当前 Demo 会保存追踪规则和标签映射，接入后开始记录真实打开行为。</span></div>
        `,
        onConfirm: () => {
          const name = $("#radarCreateName")?.value.trim();
          const tag = $("#radarCreateTag")?.value.trim();
          if (!name || !tag) { showToast("请填写雷达名称和自动标签"); return false; }
          radars.unshift({ name, type: $("#radarCreateType").value, today: 0, total: 0, tag, status: "待接入" });
          renderSupplementModules();
          recordOperation("创建互动雷达", name, `自动标签：${tag}；真实打开事件待外部 SDK`);
          showToast("雷达配置已保存，可在列表复查；真实打开事件待接入");
        }
      });
    });
    $("#createFraudTask").addEventListener("click", () => {
      openWorkflow({
        title: "新建活动防刷任务",
        confirmLabel: "创建并开始监控",
        body: `
          <div class="form-row"><label for="fraudTaskName">任务名称</label><input class="field" id="fraudTaskName" value="七夕福利防刷"></div>
          <div class="form-row"><label for="fraudTaskRules">拦截规则</label><textarea class="field" id="fraudTaskRules" rows="3">同设备/IP 10 分钟内参与超过 3 次；注册时间小于 24 小时</textarea></div>
          <div class="workflow-summary"><strong>执行结果</strong><span>命中记录进入拦截明细，人工复核后可加入活动黑名单。</span></div>
        `,
        onConfirm: () => {
          const name = $("#fraudTaskName")?.value.trim();
          if (!name) { showToast("请输入任务名称"); return false; }
          fraudTasks.unshift({ name, users: 0, blocked: 0, status: "监控中", rules: $("#fraudTaskRules").value.trim() });
          renderSupplementModules();
          recordOperation("创建防刷任务", name, "规则已启用，状态：监控中");
          showToast("防刷任务已创建并开始监控，可在列表查看拦截明细");
        }
      });
    });
    $("#startFraudGuard").addEventListener("click", () => {
      fraudTasks[0].status = "监控中";
      fraudTasks[0].blocked += 3;
      renderSupplementModules();
      showToast("AI 防刷已启动，新增拦截 3 个高风险账号");
    });
    $("#generateAiCopy").addEventListener("click", () => {
      const prompt = $("#aiCopyInput").value.trim();
      if (!prompt) { showToast("请输入文案需求"); return; }
      const button = $("#generateAiCopy");
      if (button.classList.contains("is-generating")) return;
      const title = prompt.includes("朋友圈") ? "朋友圈运营文案" : prompt.includes("群发") ? "群发运营文案" : "AI 运营文案";
      setAiGenerating(button, true);
      setTimeout(() => {
        addAiCopyRecord(title, "七夕肌肤补水季开启，老客可保留原方案权益，并赠送一次皮肤检测。回复 1 帮您锁定本周名额。");
        setAiGenerating(button, false);
        showToast("AI 文案已生成，可写入群发或朋友圈");
      }, 560);
    });
    document.addEventListener("click", async (event) => {
      const preview = event.target.closest("[data-ai-copy-preview]");
      if (preview) previewAiCopy(Number(preview.dataset.aiCopyPreview));
      const copy = event.target.closest("[data-ai-copy-copy]");
      if (copy) {
        const item = aiCopyHistory[Number(copy.dataset.aiCopyCopy)];
        if (item) { await copyText(item.content); showToast("文案已复制，可粘贴到群发或朋友圈"); }
      }
    });
    $("#saveAiConfig").addEventListener("click", () => {
      const threshold = Number($("#aiThresholdInput").value);
      if (!Number.isFinite(threshold) || threshold < 50 || threshold > 100) {
        showToast("自动执行阈值需在 50% 到 100% 之间");
        $("#aiThresholdInput").focus();
        return;
      }
      aiConfig = {
        copy: $("#aiCopyEnabled").checked,
        risk: $("#aiRiskEnabled").checked,
        threshold,
        review: $("#aiReviewEnabled").checked
      };
      markSaved("#aiConfigSaved");
      recordOperation("保存 AI 配置", "模型配置", `文案 ${aiConfig.copy ? "启用" : "停用"} · 风险 ${aiConfig.risk ? "启用" : "停用"} · 阈值 ${threshold}%`);
      showToast("AI 模型配置已保存");
    });
    ["#aiCopyEnabled", "#aiRiskEnabled", "#aiThresholdInput", "#aiReviewEnabled"].forEach((selector) => {
      $(selector).addEventListener("input", () => markDirty("#aiConfigSaved"));
      $(selector).addEventListener("change", () => markDirty("#aiConfigSaved"));
    });
    $("#viewLiveCustomerDetail").addEventListener("click", () => {
      const item = liveStats.find((stat) => stat.title === selectedLiveTitle) || liveStats[0];
      const sample = customers.slice(0, 8);
      openWorkflow({
        title: `观看客户 · ${item.title}`,
        confirmLabel: `批量添加「${item.tag}」`,
        body: `
          <div class="workflow-summary"><strong>${item.viewers} 位观看客户</strong><span>${item.comments} 次评论互动 · 平均观看 ${item.avg}</span></div>
          <div class="workflow-list">${sample.map((customer, index) => `<div class="workflow-list-item"><strong>${escapeHtml(customer.name)}</strong><span>观看 ${8 + index * 2} 分钟 · ${index % 3 === 0 ? "有评论" : "无评论"}</span></div>`).join("")}</div>
        `,
        onConfirm: () => $("#tagLiveViewers").click()
      });
    });
    $("#tagLiveViewers").addEventListener("click", () => {
      const item = liveStats.find((stat) => stat.title === selectedLiveTitle) || liveStats[0];
      ensureManagedTag(item.tag);
      customers.slice(0, 8).forEach((customer) => {
        if (!customer.tags.includes(item.tag)) customer.tags.push(item.tag);
      });
      renderCustomers(selectedCustomerIndex);
      renderTagManagement();
      showToast(`已为「${item.title}」观看客户批量添加「${item.tag}」`);
    });
    $("#exportDataReport").addEventListener("click", () => {
      const rows = [
        ["模块", "对象", "指标1", "指标2", "指标3"],
        ...memberStats.map((item) => ["成员统计", item.staff, item.newCustomers, item.chats, item.followRate]),
        ...liveStats.map((item) => ["直播统计", item.title, item.viewers, item.comments, item.avg]),
        ...qrStats.map((item) => ["一客一码", item.staff, item.generated, item.scans, item.added])
      ];
      const csv = `\ufeff${rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n")}`;
      downloadTextFile(`数据中心报表-${Date.now()}.csv`, csv, "text/csv;charset=utf-8");
      recordOperation("导出报表", "数据中心", "成员、直播和一客一码 CSV");
      showToast("数据中心报表已下载");
    });
    $("#scriptSearch").addEventListener("input", renderSupplementModules);
    $("#scriptSortButton").addEventListener("click", () => {
      const modes = ["默认排序", "最近更新", "使用次数", "转化率"];
      scriptSortMode = modes[(modes.indexOf(scriptSortMode) + 1) % modes.length];
      renderScriptLibrary();
      showToast(`话术包已按「${scriptSortMode}」排序`);
    });
    $("#logSearch").addEventListener("input", renderSupplementModules);
    $("#runTagGovernance").addEventListener("click", () => {
      $("#tagGovernanceText").textContent = "已识别 2 组疑似重复标签，建议合并「高意向/高意向咨询」，并清理停用未使用标签。";
      showToast("标签治理建议已生成");
    });
    $("#saveWelcomeConfig").addEventListener("click", () => {
      const friend = $("#friendWelcomeInput").value.trim();
      const group = $("#defaultGroupWelcomeInput").value.trim();
      if (!friend || !group) { showToast("好友欢迎语和入群欢迎语不能为空"); return; }
      savedWelcomeConfig = { friend, group };
      $("#groupWelcomeText").value = group;
      $("#tagGroupWelcomeInput").value = group;
      markSaved("#welcomeConfigSaved");
      recordOperation("保存欢迎语配置", "系统管理", "好友欢迎语与入群欢迎语已同步");
      showToast("欢迎语配置已保存并同步");
    });
    ["#friendWelcomeInput", "#defaultGroupWelcomeInput"].forEach((selector) => {
      $(selector).addEventListener("input", () => markDirty("#welcomeConfigSaved"));
    });
    $("#saveSidebarConfig").addEventListener("click", () => {
      const enabled = $$("[data-sidebar-module].active").map((item) => item.dataset.sidebarModule);
      $("#sidebarEnabledText").textContent = enabled.join(" / ") || "暂无启用模块";
      showToast("企微侧边栏配置已保存");
    });
    $("#askAssistant").addEventListener("click", () => {
      const prompt = $("#assistantPromptInput").value.trim();
      if (!prompt) {
        updateAssistantOutput("可以这样问我", "例如：生成水光复购群发、帮我回复风险会话、给这批客户推荐标签、总结今天风险。", ["群发", "回复", "标签"]);
        showToast("请输入要生成的运营任务");
        return;
      }
      if (prompt.includes("群发") || prompt.includes("复购") || prompt.includes("文案")) runAssistantAction("broadcast");
      else if (prompt.includes("回复") || prompt.includes("会话")) runAssistantAction("reply");
      else if (prompt.includes("标签")) runAssistantAction("tags");
      else if (prompt.includes("风险") || prompt.includes("客诉")) runAssistantAction("risk");
      else {
        updateAssistantOutput("运营建议", "建议先筛选高意向咨询客户，排除 7 天内已触达对象，再用水光复购素材生成一条定时群发任务。", ["高意向咨询", "水光复购"]);
        showToast("AI 已生成运营建议");
      }
    });
    $("#assetSearchInput").addEventListener("input", renderAssets);
    $("#conversationSearch").addEventListener("input", renderConversationThread);
    $("#accountSwitchBtn").addEventListener("click", () => {
      renderAccounts();
      openModal("#accountSwitchModal");
    });
    $("#openAccountSwitchFromSettings").addEventListener("click", () => {
      renderAccounts();
      openModal("#accountSwitchModal");
    });
    $("#openAccountSwitchInline").addEventListener("click", () => {
      renderAccounts();
      openModal("#accountSwitchModal");
    });
    $("#openAccountCreate").addEventListener("click", () => openAccountEditor());
    $("#saveAccount").addEventListener("click", () => {
      const payload = {
        name: $("#accountNameInput").value.trim(),
        login: $("#accountLoginInput").value.trim(),
        role: $("#accountRoleInput").value,
        scope: $("#accountScopeInput").value,
        permissions: selectedAccountPermissions()
      };
      if (!payload.name || !payload.login) {
        showToast("请填写员工姓名和登录账号");
        return;
      }
      if (!payload.permissions.length) {
        showToast("请至少选择 1 个模块权限");
        return;
      }
      payload.menus = payload.permissions.length;
      if (editingAccountId) {
        const account = accounts.find((item) => item.id === editingAccountId);
        if (account) Object.assign(account, payload);
        showToast("员工账号与权限已更新");
      } else {
        accounts.push({
          id: `account-${Date.now()}`,
          ...payload,
          last: "尚未登录",
          status: "启用"
        });
        showToast("员工账号与权限已创建");
      }
      closeModals();
      renderAccountChrome();
      renderAccounts();
    });
    ["#broadcastTitleInput", "#broadcastTagInput", "#broadcastTimeInput"].forEach((selector) => {
      const node = $(selector);
      if (node) {
        node.addEventListener("input", renderBroadcastWizard);
        node.addEventListener("change", renderBroadcastWizard);
      }
    });
    $("#syncBtn")?.addEventListener("click", startSync);
    $("#syncBtn2")?.addEventListener("click", startSync);

    $("#categoryFilter").addEventListener("change", (event) => renderStores(event.target.value));
    $("#storeDataCategoryFilter").addEventListener("change", (event) => renderStores(event.target.value));
    $("#customerSearch").addEventListener("input", () => {
      resetCustomerPage();
      renderCustomers(selectedCustomerIndex);
    });
    document.addEventListener("input", (event) => {
      if (event.target.matches("#riskNote")) {
        const footer = event.target.closest(".conversation-info-card")?.querySelector(".risk-note-footer");
        if (footer) footer.textContent = `${event.target.value.length} / 200`;
      }
    });
    $("#tagManageTypeFilter").addEventListener("change", (event) => {
      tagManageTypeFilter = event.target.value;
      renderTagManagement();
    });
    $("#tagManageGroupFilter").addEventListener("change", (event) => {
      tagManageGroupFilter = event.target.value;
      renderTagManagement();
    });
    $("#tagManageSearch").addEventListener("input", renderTagManagement);
    $("#groupSearchInput").addEventListener("input", () => {
      groupPage = 1;
      renderGroups();
    });
    $("#groupTagFilter").addEventListener("change", () => {
      groupPage = 1;
      renderGroups();
    });
    $("#groupPrevPage").addEventListener("click", () => {
      groupPage = Math.max(1, groupPage - 1);
      renderGroups();
    });
    $("#groupNextPage").addEventListener("click", () => {
      const keyword = ($("#groupSearchInput")?.value || "").trim();
      const tag = $("#groupTagFilter")?.value || "标签：全部";
      const total = groups.filter((group) => (!keyword || group.name.includes(keyword) || group.owner.includes(keyword) || group.meta.includes(keyword)) && (tag === "标签：全部" || group.tag === tag)).length;
      groupPage = Math.min(Math.max(1, Math.ceil(total / groupPageSize)), groupPage + 1);
      renderGroups();
    });
    $("#accountRoleInput").addEventListener("change", (event) => {
      renderAccountPermissionChecks(rolePermissionDefaults[event.target.value] || []);
      showToast(`已按「${event.target.value}」带入默认权限`);
    });
    $("#customerPrevPage").addEventListener("click", () => {
      customerPage = Math.max(1, customerPage - 1);
      renderCustomers(selectedCustomerIndex);
    });
    $("#customerNextPage").addEventListener("click", () => {
      const totalPages = Math.max(1, Math.ceil(filteredCustomers().length / customerPageSize));
      customerPage = Math.min(totalPages, customerPage + 1);
      renderCustomers(selectedCustomerIndex);
    });

    $("#selectAll").addEventListener("change", (event) => {
      const visibleIndexes = $$(".rowCheck").map((check) => Number(check.dataset.checkIndex));
      visibleIndexes.forEach((index) => {
        if (event.target.checked) checkedCustomerIndexes.add(index);
        else checkedCustomerIndexes.delete(index);
      });
      $$(".rowCheck").forEach((check) => check.checked = event.target.checked);
      updateBatchbar();
      refreshAssistantMini();
    });

    $("#selectAllGroups").addEventListener("change", (event) => {
      $$(".groupCheck").forEach((check) => {
        if (event.target.checked) checkedGroupIds.add(check.dataset.groupCheck);
        else checkedGroupIds.delete(check.dataset.groupCheck);
        check.checked = event.target.checked;
      });
      updateGroupBatchbar();
    });

    document.addEventListener("change", (event) => {
      if (event.target.classList.contains("rowCheck")) {
        const index = Number(event.target.dataset.checkIndex);
        if (event.target.checked) checkedCustomerIndexes.add(index);
        else checkedCustomerIndexes.delete(index);
        updatePageSelectAll();
        updateBatchbar();
        refreshAssistantMini();
      }
      if (event.target.classList.contains("groupCheck")) {
        const id = event.target.dataset.groupCheck;
        if (event.target.checked) checkedGroupIds.add(id);
        else checkedGroupIds.delete(id);
        const checks = $$(".groupCheck");
        if ($("#selectAllGroups")) $("#selectAllGroups").checked = checks.length > 0 && checks.every((check) => check.checked);
        updateGroupBatchbar();
      }
    });

    document.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-tag-choice]");
      if (!choice) return;
      const tag = choice.dataset.tagChoice;
      if (tagSelection.has(tag)) tagSelection.delete(tag);
      else tagSelection.add(tag);
      renderTagSelection();
    });

    document.addEventListener("click", (event) => {
      const permission = event.target.closest("[data-account-permission]");
      if (!permission) return;
      permission.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      const module = event.target.closest("[data-sidebar-module]");
      if (!module) return;
      module.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      const resource = event.target.closest("[data-script-resource]");
      const collection = event.target.closest("[data-script-collection]");
      const view = event.target.closest("[data-script-view]");
      const filterButton = event.target.closest("[data-script-filter]");
      const filterOption = event.target.closest("[data-script-filter-option]");
      const clearFilter = event.target.closest("[data-script-clear-filter]");
      const clearFilters = event.target.closest("[data-script-clear-filters]");
      const select = event.target.closest("[data-script-select]");
      const favorite = event.target.closest("[data-script-favorite]");
      const more = event.target.closest("[data-script-more]");
      const detail = event.target.closest("[data-script-detail]");
      const detailBack = event.target.closest("[data-script-detail-back]");
      const templateUse = event.target.closest("[data-script-template-use]");
      const templateCopy = event.target.closest("[data-script-template-copy]");
      const editPackage = event.target.closest("[data-script-edit-package]");
      const clearSelection = event.target.closest("[data-clear-script-selection]");
      const batchAction = event.target.closest("[data-script-batch-action]");

      if (resource) {
        scriptDetailId = null;
        scriptResourceFilter = resource.dataset.scriptResource;
        scriptCollectionFilter = "全部";
        renderScriptLibrary();
        showToast(`已切换到${scriptResourceFilter}`);
        return;
      }
      if (collection) {
        scriptDetailId = null;
        scriptCollectionFilter = collection.dataset.scriptCollection;
        scriptResourceFilter = "全部话术";
        renderScriptLibrary();
        showToast(`已打开话术集合：${scriptCollectionFilter}`);
        return;
      }
      if (view) {
        scriptDetailId = null;
        scriptViewMode = view.dataset.scriptView;
        renderScriptLibrary();
        return;
      }
      if (filterOption) {
        const key = filterOption.dataset.scriptFilterOption;
        scriptFilters[key] = filterOption.dataset.scriptFilterValue;
        openScriptFilterKey = null;
        renderScriptLibrary();
        return;
      }
      if (filterButton) {
        const key = filterButton.dataset.scriptFilter;
        if (key === "more") {
          openScriptAdvancedFilters();
        } else {
          openScriptFilterKey = openScriptFilterKey === key ? null : key;
          renderScriptLibrary();
        }
        return;
      }
      if (clearFilter) {
        const key = clearFilter.dataset.scriptClearFilter;
        if (key === "creator") scriptAdvancedFilters.creator = "全部";
        else if (key === "minConversion") scriptAdvancedFilters.minConversion = 0;
        else scriptFilters[key] = "全部";
        renderScriptLibrary();
        return;
      }
      if (clearFilters) {
        scriptFilters = { scope: "全部", scene: "全部", stage: "全部", channel: "全部", project: "全部", status: "全部" };
        scriptAdvancedFilters = { creator: "全部", minConversion: 0 };
        renderScriptLibrary();
        return;
      }
      if (select) {
        const id = select.dataset.scriptSelect;
        if (select.checked) selectedScriptIds.add(id);
        else selectedScriptIds.delete(id);
        renderScriptLibrary();
        return;
      }
      if (favorite) {
        const item = scripts.find((script) => script.id === favorite.dataset.scriptFavorite);
        if (item) {
          item.favorite = !item.favorite;
          renderScriptLibrary();
          markOperationFeedback(`[data-script-detail="${CSS.escape(item.id)}"]`);
          showToast(item.favorite ? `已收藏「${item.title}」` : `已取消收藏「${item.title}」`);
        }
        return;
      }
      if (more) {
        const item = scripts.find((script) => script.id === more.dataset.scriptMore);
        if (item) openScriptDetail(item);
        return;
      }
      if (detailBack) {
        scriptDetailId = null;
        renderScriptLibrary();
        return;
      }
      if (templateCopy) {
        const item = scripts.find((script) => script.id === scriptDetailId);
        const entry = item && scriptPackageEntries(item)[Number(templateCopy.dataset.scriptTemplateCopy)];
        if (item && entry) {
          copyText(entry.content);
          item.uses += 1;
          renderScriptLibrary();
          recordOperation("复制话术", item.title, entry.title);
          showToast("话术已复制");
        }
        return;
      }
      if (templateUse) {
        const item = scripts.find((script) => script.id === scriptDetailId);
        const entry = item && scriptPackageEntries(item)[Number(templateUse.dataset.scriptTemplateUse)];
        if (item && entry) {
          item.uses += 1;
          scriptDetailId = null;
          renderScriptLibrary();
          goSubscreen("customers", "conversations");
          $("#replyInput").value = entry.content;
          recordOperation("调用话术", item.title, entry.title);
          showToast("话术已写入当前会话，可编辑后发送");
        }
        return;
      }
      if (editPackage) {
        const item = scripts.find((script) => script.id === editPackage.dataset.scriptEditPackage);
        if (item) openScriptPackageEditor(item);
        return;
      }
      if (detail) {
        const item = scripts.find((script) => script.id === detail.dataset.scriptDetail);
        if (item) openScriptDetail(item);
        return;
      }
      if (clearSelection) {
        selectedScriptIds.clear();
        renderScriptLibrary();
        return;
      }
      if (batchAction) {
        const action = batchAction.dataset.scriptBatchAction;
        const selectedItems = scripts.filter((item) => selectedScriptIds.has(item.id));
        if (!selectedItems.length) {
          showToast("请先选择话术包");
          return;
        }
        handleScriptBatchAction(action, selectedItems);
        return;
      }

      if (openScriptFilterKey && !event.target.closest(".script-filter-control")) {
        openScriptFilterKey = null;
        renderScriptLibrary();
      }
    });

    document.addEventListener("click", (event) => {
      const policyButton = event.target.closest("[data-open-approval-policy]");
      if (policyButton) {
        openWorkflow({
          title: "配置群发审批规则",
          confirmLabel: "保存规则",
          body: `<div class="form-grid"><label>适用范围<input id="approvalPolicyScope" value="${approvalPolicy.scope}"></label><label>触发条件<input id="approvalPolicyRule" value="${approvalPolicy.rule}"></label><label>审批人<input id="approvalPolicyApprovers" value="${approvalPolicy.approvers}"></label><label>SLA<input id="approvalPolicySla" value="${approvalPolicy.sla}"></label><label class="form-full">超时处理<input id="approvalPolicyEscalation" value="${approvalPolicy.escalation}"></label></div>`,
          onConfirm: () => {
            approvalPolicy.scope = $("#approvalPolicyScope").value.trim() || approvalPolicy.scope;
            approvalPolicy.rule = $("#approvalPolicyRule").value.trim() || approvalPolicy.rule;
            approvalPolicy.approvers = $("#approvalPolicyApprovers").value.trim() || approvalPolicy.approvers;
            approvalPolicy.sla = $("#approvalPolicySla").value.trim() || approvalPolicy.sla;
            approvalPolicy.escalation = $("#approvalPolicyEscalation").value.trim() || approvalPolicy.escalation;
            recordOperation("更新审批规则", approvalPolicy.scope, `${approvalPolicy.rule}；${approvalPolicy.escalation}`);
            renderGrowthGovernance();
            showToast("审批规则已保存并写入审计记录");
          }
        });
        return;
      }
      const resolveOneId = event.target.closest("[data-resolve-oneid]");
      if (resolveOneId) {
        const index = Number(resolveOneId.dataset.resolveOneid);
        const customer = customers[index];
        if (!customer) return;
        customer.identityResolved = true;
        customer.followups = customer.followups || [];
        customer.followups.unshift({ type: "OneID 人工确认", time: "2026-07-15 16:25", note: "已核对预约系统低置信度记录，确认合并至当前客户身份。" });
        renderCustomerDetail(index);
        recordOperation("确认 OneID 合并", customer.name, customerOneId(index));
        showToast(`已确认 ${customer.name} 的 OneID 合并关系`);
        return;
      }
      const contactGuard = event.target.closest("[data-toggle-contact-guard]");
      if (contactGuard) {
        const index = Number(contactGuard.dataset.toggleContactGuard);
        const customer = customers[index];
        if (!customer) return;
        customer.contactPaused = !customer.contactPaused;
        renderCustomerDetail(index);
        recordOperation(customer.contactPaused ? "暂停自动触达" : "恢复自动触达", customer.name, "客户级频控状态已更新");
        showToast(customer.contactPaused ? "已暂停该客户的自动触达" : "已恢复该客户的自动触达");
        return;
      }
      const approval = event.target.closest("[data-broadcast-approval]");
      if (!approval) return;
      const task = broadcasts.find((item) => item.title === approval.dataset.broadcastTitle);
      if (!task) return;
      const approved = approval.dataset.broadcastApproval === "approve";
      const next = approved ? (task.executionMode === "员工确认" ? "待员工确认" : "待定时发送") : "已驳回";
      transitionBroadcast(task, next, approved ? "群发审批通过" : "群发审批退回", approved ? "已通过内容、客群与发送时段复核" : "需调整宣传表述与实验分组后重新提交");
      renderBroadcasts();
      renderGrowthGovernance();
      showToast(approved ? `「${task.title}」已审批通过，可进入实验执行` : `「${task.title}」已退回修改`);
    });

    renderStores();
    renderAttributionBoard();
    renderTodos();
    renderTodayOperations();
    renderTagManagement();
    renderCustomers();
    renderGroups();
    renderBroadcasts();
    renderMedicalSopTemplates();
    renderGrowthGovernance();
    renderLifecycleGovernance();
    renderBatchTasks();
    renderInviteTasks();
    renderSupplementModules();
    renderMigrationBoard();
    renderAssets();
    renderConversationThread();
    renderAccountChrome();
    renderAccounts();
    $$('[data-close-modal]:not([aria-label])').forEach((button) => button.setAttribute("aria-label", "关闭弹窗"));
    bindAssistantHover();
    bindAssistantRailReopenDrag();
    bindAssistantRailPanelDrag();
    bindAssistantLauncherDrag();
    bindPointerGlow();
    drawTrendChart();
  
