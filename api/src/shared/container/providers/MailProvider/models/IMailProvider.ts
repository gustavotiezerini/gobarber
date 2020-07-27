import ISendMailDTO from '@shared/container/providers/MailProvider/dtos/ISendMailDTO';

export default interface ImailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
