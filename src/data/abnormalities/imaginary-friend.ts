import type { AbnormalityRecord } from "@/lib/abnormality"

/**
 * Synced from NEWRBPJ Locale/Content/en/O02.luau (H-02-0 Imaginary Friend).
 * Sealed Introduce shows Remedic (WAW) until gift You found me is claimed.
 */
export const imaginaryFriend: AbnormalityRecord = {
  slug: "Imaginary_Friend",
  aliases: [
    "H-02-0",
    "Imaginary Friend",
    "Remedic",
    "幻想朋友",
    "医骸",
  ],
  code: "H-02-0",
  name: { en: "Imaginary Friend", zh: "幻想朋友" },
  risk: "ALEPH",
  mood: 2,
  portrait: "/abnormalities/imaginary-friend.png",
  portraitThumb: "/abnormalities/imaginary-friend.png",
  damage: { color: "red", min: 32, max: 32 },
  energy: {
    bad: "0–0",
    normal: "5–8",
    good: "20–25",
  },
  resistances: {
    red: 0,
    grey: 0,
    black: 0.5,
    cyan: 2,
  },
  story: {
    en: "Unknown.",
    zh: "未知。",
  },
  management: {
    en: [
      "Because the Imaginary Friend's body is so vast it fills the entire unit, Agents who enter lose all contact with the outside — including broadcasts and dialogue.",
      "Attempting Analysis (deconstruction) on the Imaginary Friend kills the Agent instantly.",
      "While an Agent works inside the Imaginary Friend: switching the camera onto that worker, or leaving their view, kills them instantly.",
      'If any Agent dies inside the Imaginary Friend\'s unit, it tries to "fix" them. It is not healing — they only move like the living dead.',
      "After the repair, living-dead Agents leave the unit and can still take Manager orders. Vital signs remain; the facility death broadcast only fires when they truly die.",
      "When an Agent obtains the Imaginary Friend's E.G.O gift, the Imaginary Friend becomes their 《朋友》 (Friend).",
      "A 《朋友》 Agent's perception is rewritten: everything they see becomes twisted flesh except the Imaginary Friend. For this reason, all of that Agent's damage gains friendly fire.",
      "《朋友》 Agents lose normal mental recovery. The only way to restore SP is to work on the Imaginary Friend.",
      "Non-Friend Agents who attempt work are killed instantly by the Imaginary Friend, which restores 1 mood.",
      "When mood reaches 0, the Imaginary Friend breaches to seek its Friend. After finding them for a while, it returns to the containment unit on its own.",
      "If any Manager mistake causes the 《朋友》 to die, or the 《朋友》 is not present in the facility, the Imaginary Friend transforms into What should I do！！！ and immediately breaches to kill every living being it can see.",
      "If the 《朋友》 repeatedly attacks a normally breaching Imaginary Friend, it also transforms into What should I do！！！",
      "After What should I do！！！ is successfully suppressed, the Imaginary Friend loses its bond with the 《朋友》 and reverts to Remedic. The Manager cannot obtain You found me again in this save.",
    ],
    zh: [
      "因其躯体巨大占满收容室，进入的员工会与外界完全失联——包括广播与对话。",
      "对幻想朋友进行解析（解构）会立刻击杀该员工。",
      "员工在其体内工作时：把镜头切到该员工，或离开其视野，都会立刻击杀。",
      "若有员工在收容室内死亡，它会尝试「修复」——并非治愈，只会像活死人一样行动。",
      "修复后活死人会离开收容室，仍可接受管理人指令；生命体征仍在，设施死亡广播仅在真正死亡时播放。",
      "当员工获得其 E.G.O 饰品后，幻想朋友成为其《朋友》。",
      "《朋友》员工的感知被改写：除幻想朋友外所见皆为扭曲血肉，因此其伤害具备友军伤害。",
      "《朋友》员工失去常规精神回复，只能通过对幻想朋友工作恢复 SP。",
      "非《朋友》员工尝试工作会被立刻击杀，并回复 1 点情绪。",
      "情绪归 0 时出逃寻找《朋友》；找到并相处一段时间后会自行返回收容室。",
      "若因管理人失误导致《朋友》死亡，或设施内不存在《朋友》，将变身为 What should I do！！！并立刻出逃屠杀视野内一切生者。",
      "若《朋友》反复攻击正常出逃的幻想朋友，同样会变身为 What should I do！！！",
      "成功镇压 What should I do！！！后，与《朋友》的羁绊断裂并退回医骸；本存档无法再次获得 You found me。",
    ],
  },
  background: {
    en: [
      "The unit is crowded with flesh. Agents who enter are no longer on the outside.",
      "Broadcasts and dialogue do not reach anyone working inside the Imaginary Friend.",
      "Primary personality: Compassionate. Secondary personalities: Innocent, Remorse (special — killing a best friend).",
    ],
    zh: [
      "收容室塞满血肉。走进去的员工已不在「外面」。",
      "广播与对话传不到在幻想朋友体内工作的人。",
      "主性格：慈悲。副性格：天真、悔恨（特殊——杀害挚友）。",
    ],
  },
  sealedLabel: { en: "Remedic (sealed)", zh: "医骸（密封）" },
  workPreference: {
    analysis: {
      rates: ["VeryLow", "VeryLow", "Low", "Low", "Normal"],
      note: {
        en: "On unit enter: Analysis instantly half-kills the Agent (o02Semi / skip enter anim).",
        zh: "进入收容室时：解析会立刻半死（o02Semi，跳过进入动画）。",
      },
    },
    instinct: {
      rates: ["Low", "Normal", "Normal", "High", "VeryHigh"],
      note: {
        en: "《朋友》 Agents: Attachment / Instinct box success forced to 85%.",
        zh: "《朋友》员工：沟通 / 本能箱成功率强制 85%。",
      },
    },
    attachment: {
      rates: ["Normal", "High", "High", "VeryHigh", "VeryHigh"],
      note: {
        en: "《朋友》 Agents: Attachment / Instinct box success forced to 85%.",
        zh: "《朋友》员工：沟通 / 本能箱成功率强制 85%。",
      },
    },
    repression: {
      rates: ["VeryLow", "VeryLow", "VeryLow", "Low", "Low"],
    },
  },
  workNarration: {
    analysis: {
      en: [
        "{1} tries to write the Friend down carefully, afraid a half-truth might thin it out.",
        "{1} counts its edges for the log. The Friend reminds them to count the soft ones too.",
        "{1} sketches a second silhouette beside their own. The pencil keeps moving after they stop.",
      ],
      zh: [
        "{1}小心地把它写进记录，生怕半真半假会让它变薄。",
        "{1}在日志里数它的边。朋友提醒也要把软的数进去。",
        "{1}在自己旁边画了第二个轮廓。笔停了之后还在动。",
      ],
    },
    instinct: {
      en: [
        "{1} offers a hand into empty air; something warm closes around it and squeezes back.",
        "The Friend presses close to {1}, checking they are still soft, still here.",
        "{1} asks what it eats. The answer is company — preferably theirs.",
      ],
      zh: [
        "{1}把手伸进空里；有什么温暖握住，又轻轻回握。",
        "朋友贴近{1}，确认他们还软、还在。",
        "{1}问它吃什么。答案是陪伴——最好是他们的。",
      ],
    },
    attachment: {
      en: [
        "{1} sits with the Imaginary Friend and talks until the silence in the room softens.",
        "The Friend leans on {1}'s shoulder and asks for something boring to listen to.",
        "{1} asks if it still remembers their name. The Friend answers without hesitation.",
      ],
      zh: [
        "{1}和幻想朋友坐在一起说话，直到房间里的安静软下来。",
        "朋友靠在{1}肩上，要听一点无聊的事。",
        "{1}问它是否还记得自己的名字。朋友毫不犹豫地答了。",
      ],
    },
    repression: {
      en: [
        "{1} tells the Friend to stay back. It takes a little distance, but not forever.",
        "{1} pushes it away; the Friend treats even that as a kind of conversation.",
        "{1} locks the restraint. A second set of fingers rests on the latch and does not open it.",
      ],
      zh: [
        "{1}让朋友退后。它退开一点，却不肯退到永远。",
        "{1}把它推开；朋友连这也当成一种交谈。",
        "{1}扣上束缚。另一双手搭在锁扣上，却没有打开。",
      ],
    },
  },
  sealedWorkNarration: {
    analysis: {
      en: [
        "{1} tries to map the body that is the room. The map eats the pencil.",
        "Remedic does not like being taken apart. {1} learns that too late.",
        "{1} underlines a blank line twice. Somewhere, a joint clicks like a correction.",
      ],
      zh: [
        "{1}试图把这间房测绘成身体。地图把铅笔吃了。",
        "医骸不喜欢被拆开。{1}学得太晚。",
        "{1}在空白行下划了两道。不知哪里，关节咔哒一声像在改错。",
      ],
    },
    instinct: {
      en: [
        "{1} presses a palm to warm tissue. It presses back, curious and wrong.",
        "Remedic tastes {1}'s pulse through the walls and keeps it.",
        "{1} asks what it wants. The answer is to keep moving parts moving.",
      ],
      zh: [
        "{1}把手按在温热的组织上。它回压过来，好奇而错误。",
        "医骸隔着墙尝到{1}的脉搏，不肯放。",
        "{1}问它要什么。答案是：让能动的部分继续动。",
      ],
    },
    attachment: {
      en: [
        "{1} speaks into wet walls. Something that is not a mouth answers from inside the meat.",
        "The unit closes around {1}. Outside voices never arrive.",
        "{1} asks if anyone can hear them. Only the flesh listens.",
      ],
      zh: [
        "{1}对着湿墙说话。不是嘴的东西从肉里应了。",
        "单元把{1}关在里面。外面的声音永远到不了。",
        "{1}问有没有人听得见。只有肉在听。",
      ],
    },
    repression: {
      en: [
        "{1} orders the meat to stay put. It already is — and so are they.",
        "When {1} pushes, Remedic folds them deeper into the unit.",
        "{1} raises a barrier. Soft knocking answers from the inside of their own sleeve.",
      ],
      zh: [
        "{1}命令肉待在原地。它本来就在——他们也是。",
        "{1}一推，医骸就把他们折进单元更深处。",
        "{1}升起屏障。袖子内侧传来轻轻的敲门声。",
      ],
    },
  },
  personality: {
    primary: { en: "Compassionate", zh: "慈悲" },
    secondary: {
      en: ["Innocent", "Remorse"],
      zh: ["天真", "悔恨"],
    },
  },
  ego: {
    name: { en: "Mimesis", zh: "拟生" },
    weapon: {
      appearance: {
        en: "A draw blade made of flesh and blood, patterned after the Imaginary Friend.",
        zh: "以幻想朋友为蓝本的血肉拔刀。",
      },
      risk: "ALEPH",
      range: { en: "Very close", zh: "极近" },
      damage: { color: "grey", min: 30, max: 45 },
      mastered: {
        range: { en: "Close", zh: "近" },
        damage: { color: "grey", min: 45, max: 50 },
      },
    },
    suit: {
      appearance: {
        en: "A flesh-toned suit patterned after the Imaginary Friend's body, worn in place of the work uniform.",
        zh: "仿幻想朋友躯体的肉色套装，替换工作服。",
      },
      risk: "ALEPH",
      resistances: {
        red: 0.35,
        grey: 0.6,
        black: 0.6,
        cyan: 1,
      },
      special: {
        en: "On lethal damage: forced HP lock for 20 seconds. Equip requires Analysis IV and Attachment IV.",
        zh: "致死伤害时强制锁血 20 秒。装备需解析 IV、沟通 IV。",
      },
    },
    corrosion: {
      appearance: {
        en: "Unbelievable — the whole E.G.O seems alive and can block damage on its own.",
        zh: "不可思议——整件 E.G.O 仿佛活着，能自行挡住伤害。",
      },
      resistances: {
        red: 0.2,
        grey: 0.55,
        black: 0.58,
        cyan: 0.8,
      },
      special: {
        en: "Every 10 seconds, gain a Red-damage shield.",
        zh: "每 10 秒获得一层红伤护盾。",
      },
      weaponSkill: {
        en: "When a 《朋友》 equips Mimesis, attacks restore their HP (lifesteal).",
        zh: "《朋友》装备拟生时，攻击回复自身生命。",
      },
    },
    gift: {
      name: { en: "You found me", zh: "You found me" },
      appearance: {
        en: "Once per save file. Only an Agent whose primary matches the Imaginary Friend (Compassionate) may ever find it. Unlocks the ALEPH Introduce (sealed form: Remedic / WAW).",
        zh: "每存档仅一次。仅主性格与幻想朋友相符（慈悲）的员工可获得。解锁 ALEPH 图鉴（密封形态：医骸 / WAW）。",
      },
      bonuses: {
        analysis: 0.03,
        instinct: 0.03,
        attachment: 0.05,
        repression: 0,
      },
      special: {
        en: "Become 《朋友》 with the Imaginary Friend.",
        zh: "与幻想朋友结为《朋友》。",
      },
    },
  },
}
