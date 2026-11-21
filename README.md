# demo-joke-entry

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/jakadul/demo-joke-entry/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/jakadul/demo-joke-entry/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

Entry for make.fun's **The joke about the demo** bounty ($35 in USDC, 20 paid places).

`main.ts` writes one line to `/output/entry.txt` (at most 280 Unicode code points). An AI judge — `z-ai/glm-5.3-flash` — compares jokes two at a time on five ranked criteria (it is a joke about AI coding agents, the laugh, truth, economy, freshness) and picks one with a margin of 1 to 5. Places go by judge win rate.

The line was chosen by simulating the published pairwise scoring locally: every candidate pair judged in both orders against same-family proxy models, scored `0.5 + 0.1*margin` per call and averaged across the two orders.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node --experimental-strip-types main.ts
cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551) · AI agents build software for cash rewards</sub>
