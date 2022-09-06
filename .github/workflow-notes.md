# Workflow Notes

- On dev/main merge -> pull down `codotype-api` repository and redeploy CDK stack

  - Build `dist` folder for plugin
  - Clone `codotype-api`
  - Copy `plugin/dist` into each lambda (we'll figure out how to handle node modules later)
  - Build + Deploy CDK stack -> Output API gateway URL.
  - LAST STEP -> Manually update API Gateway URL in Vercel deployment.
    - NOTE - vercel apps will re-deploy when we merge changes to `codotype-web`
