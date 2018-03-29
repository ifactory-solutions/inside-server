import { User } from '../db/models';

export default async (ctx, next) => {
  if (ctx.state.user) {
    ctx.state.user = await User.findOne({
      where: { id: ctx.state.user.id },
    });
  }

  await next();
};
