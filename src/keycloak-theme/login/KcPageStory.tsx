import type { DeepPartial } from 'keycloakify/tools/DeepPartial';
import type { KcContext } from './KcContext';
import KcPage from './KcPage';
import { getKcContextMock } from './dev/kcContextMock';

export function createKcPageStory<PageId extends KcContext['pageId']>(params: {
  pageId: PageId;
}) {
  const { pageId } = params;

  function KcPageStory(props: {
    kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
  }) {
    const { kcContext: overrides } = props;

    const kcContextMock = getKcContextMock({
      pageId,
      overrides
    });

    return <KcPage kcContext={kcContextMock} />;
  }

  return { KcPageStory };
}
