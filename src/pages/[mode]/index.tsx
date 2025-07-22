import { AppModes } from '@/routes';

export { default } from '@/routes/app';

export const getStaticPaths = async () => ({
  paths: Object.values(AppModes).map(mode => ({
    params: { mode },
  })),
  fallback: false,
});

export const getStaticProps = async ({
  params,
}: {
  params: { mode: AppModes };
}) => ({
  props: {
    mode: params.mode,
  },
});
