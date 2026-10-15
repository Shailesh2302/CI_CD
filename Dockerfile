FROM node:20-alpine

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

#RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build

# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["node", "dist/index.js"]
