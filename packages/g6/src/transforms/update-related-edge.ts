import type { ID } from '@antv/graphlib';
import type { NodeLikeData } from '../types';
import { idOf } from '../utils/id';
import { BaseTransform } from './base-transform';
import type { DrawData } from './types';

/**
 * 如果更新了节点 / combo，需要更新连接的边
 * If the node / combo is updated, the connected edge and the combo it is in need to be updated
 */
export class UpdateRelatedEdge extends BaseTransform {
  public beforeDraw(input: DrawData): DrawData {
    const { model } = this.context;
    const {
      update: { nodes, edges, combos },
    } = input;

    const addRelatedEdges = (_: NodeLikeData, id: ID) => {
      const relatedEdgesData = model.getRelatedEdgesData(id);
      relatedEdgesData.forEach((edge) => edges.set(idOf(edge), edge));
    };

    nodes.forEach(addRelatedEdges);
    combos.forEach(addRelatedEdges);

    return input;
  }
}
