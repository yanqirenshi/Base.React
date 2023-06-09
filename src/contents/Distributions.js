import React from 'react';

export default function Distributions () {
    return (
        <div style={{width:'100%', height: '100%'}}>
          <div style={{width:'100%', display:'flex', justifyContent: 'center'}}>
            <div style={{width:'840px'}}>
              <pre>{overview.join('\n')}</pre>
            </div>
          </div>
        </div>
    );
}

const overview = [
    '                                + - - - - - - - - - - - - - - - - - -+',
    '                                :               卸売市場             :',
    '    +--------------+            :                                    :                      +--------+    +------------+',
    '    | 国内の漁業者 |----------------------------------------------------------------------->| 小売店 |--->| 消費者     |',
    '    | ・           |            :                     +------------+ :                      |   ・   |    | (家庭など) |',
    '    | 漁協         |=================================>| 消費地市場 | :                      | 飲食店 |    |            |',
    '    |              |            : +----------+        |            | :                      |        |    |            |',
    '    |              |=============>| 産地市場 |=======>|            |=======================>|        |===>|            |',
    '    |              |            : |          |   +--->|            |===+                    |        |    |            |',
    '    |              |            : |          |   |    +------------+ : ‖                   |        |    |            |',
    '    |              |            : |          |===|=====================‖==================>|        |===>|            |',
    '    |              |            : |          |   |                   : ‖   +----------+    |        |    |            |',
    '    |              |            : |          |   |                   : +===>| 加工業者 |    |        |    |            |',
    '    |              |            : |          |===|=========================>|          |===>|        |===>|            |',
    '    |              |            : +----------+   |                   :      |          |    |        |    |            |',
    '    |              |            + - - - - - - - -|- - - - - - - - - -+      |          |    |        |    |            |',
    '    |              |    +--------------------+   |                          |          |    |        |    |            |',
    '    |              |--->| 商社・大手水産会社 |---|------------------------->|          |    |        |    |            |',
    '    +--------------+    |                    |   |                          +----------+    |        |    |            |',
    '    +--------------+    |                    |   |                                          |        |    |            |',
    '    | 外国の漁業者 |    |                    |---+                                          |        |    |            |',
    '    | ・           |    |                    |                                              |        |    |            |',
    '    | 漁船         |--->|                    |--------------------------------------------->|        |--->|            |',
    '    +--------------+    +--------------------+                                              +--------+    +------------+',
    '',
    '                  市場流通 ===>    市場外流通 --->',
];
