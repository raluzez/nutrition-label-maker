import React from 'react';
import * as consts from '../../../Utility/Consts';

const Colors = (props) => {
    const { onclick, color } = props;

    const selected = "inset 2px 2px 6px rgba(0, 0, 0, 0.5)";

        return (
          <ul>
            <li
              style={{
                background: consts.orange,
                boxShadow: color === consts.orange && selected
              }}
              onClick={() => onclick(consts.orange)}
            />
            <li
              style={{
                background: consts.red,
                boxShadow: color === consts.red && selected
              }}
              onClick={() => onclick(consts.red)}
            />
            <li
              style={{
                background: consts.blue,
                boxShadow: color === consts.blue && selected
              }}
              onClick={() => onclick(consts.blue)}
            />
            <li
              style={{
                background: consts.green,
                boxShadow: color === consts.green && selected
              }}
              onClick={() => onclick(consts.green)}
            />
            <li
              style={{
                background: consts.purple,
                boxShadow: color === consts.purple && selected
              }}
              onClick={() => onclick(consts.purple)}
            />
          </ul>
        );
            }

export default Colors;
