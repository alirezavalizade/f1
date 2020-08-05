import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  WindowScroller,
  List as VList,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';

const List = ({ data, renderRow }) => {
  const list = useRef(null);
  const [cache] = useState(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 143
      })
  );

  useEffect(() => {
    cache.clearAll();
    list.current.forceUpdateGrid();
  }, [data, data.length, cache]);

  const rowRenderer = ({ index, key, style, parent, isScrolling }) => (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      rowIndex={index}
      parent={parent}
    >
      {({ measure, registerChild }) => (
        <div ref={registerChild} style={style}>
          {renderRow({ index, key, style, parent, isScrolling, measure })}
        </div>
      )}
    </CellMeasurer>
  );

  return (
    <WindowScroller>
      {({ height, registerChild, onChildScroll, scrollTop, isScrolling }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <div ref={registerChild}>
              <VList
                ref={list}
                autoHeight
                height={height || 0}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                overscanRowCount={10}
                rowCount={data.length}
                rowRenderer={rowRenderer}
                scrollTop={scrollTop}
                width={width}
                rowHeight={cache.rowHeight}
              />
            </div>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderRow: PropTypes.func.isRequired
};

export default List;
