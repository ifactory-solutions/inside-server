import { User } from '../db/models';

export default async (ctx, next) => {
  ctx.state.user = await User.findOne({
    where: { id: ctx.state.user.id },
  });

  await next();
};
