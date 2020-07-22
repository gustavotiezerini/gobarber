import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIdex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.slice(findIdex, 1);
  }
}

export default FakeStorageProvider;
