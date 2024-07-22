FROM alpine:latest

RUN apk add --no-cache git git-lfs openssh-client

COPY entrypoint.sh /entrypoint.sh

# 실행 권한 부여
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]