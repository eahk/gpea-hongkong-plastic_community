export const alice = [
  {
    type: "meta",
    data: {
      title: "【綠色夥伴】一切由成為義工開始",
      description:
        "因為自己有留意微塑膠相關的新聞及報告，發現綠色和平招募「微塑膠搜查隊」成員，好奇驅使之下便加入成為義工。親身的參與讓我不只從文字或新聞報導中認知環保議題，還可以直接理解議題的整個脈絡……",
      img: "/static/images/gp/section3-blog-alice.jpg"
    }
  },
  {
    type: "hero",
    data: {
      img: {
        url: "/static/images/gp/section3-blog-alice.jpg",
        credit: "© Greenpeace"
      }
    }
  },
  {
    type: "text",
    data: [
      {
        title: "一切由成為義工開始",
        paragraph: [
          "因為自己有留意微塑膠相關的新聞及報告，發現綠色和平招募「微塑膠搜查隊」成員，好奇驅使之下便加入成為義工。親身的參與讓我不只從文字或新聞報導中認知環保議題，我還可以直接地理解議題的整個脈絡，更有趣的，是我有機會參與多元化的義工活動，直接為環保出一分力！",
          "成為義工讓我有很多機會與綠色和平的員工一起工作，從相處中，我感受到團隊對推動環保的熱心和投入，又知道綠色和平從不接受政府及企業的捐助，遂決定成為捐款者，希望以不同的形式保護環境，讓社會得以可持續發展。"
        ]
      },
      {
        paragraph: {
          bold: true,
          text: ["Alice／香港會員及義工"]
        }
      }
    ]
  },
  {
    type: "cta",
    data: {
      csr: {
        text: "返回",
        action: "back"
      },
      ssr: {
        text: "返回綠色和平年報",
        action: "goToUrl",
        url: {
          href: "/",
          as: "/"
        }
      }
    }
  }
];
